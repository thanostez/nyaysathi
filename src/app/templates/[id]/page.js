'use client';

import { useState, useEffect, useRef } from 'react';
import { templates } from '@/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function DocumentGenerator({ params }) {
  const [template, setTemplate] = useState(null);
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const documentRef = useRef(null);

  useEffect(() => {
    // React `use` for params is needed in Next.js 14/15, but since it's a client component, 
    // params is passed as a prop directly in Next.js pages or we might need `use(params)`.
    // For simplicity, we assume `params.id` is available directly or via promise resolving.
    const loadTemplate = async () => {
      const resolvedParams = await params;
      const id = resolvedParams.id;
      const t = templates.find(temp => temp.id === id);
      
      if (!t) {
        notFound();
        return;
      }
      
      setTemplate(t);
      
      // Extract placeholders like [Your Name] or <Date>
      const regex = /(?:\[|<)(.*?)(?:\]|>)/g;
      const matches = [...t.templateText.matchAll(regex)];
      const uniqueFields = [...new Set(matches.map(m => m[1]))];
      
      setFields(uniqueFields);
      
      const initialData = {};
      uniqueFields.forEach(f => { initialData[f] = ''; });
      setFormData(initialData);
    };

    loadTemplate();
  }, [params]);

  if (!template) return <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">Loading...</div>;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Generate the live text by replacing placeholders
  let liveText = template.templateText;
  fields.forEach(field => {
    const value = formData[field] || `[${field}]`;
    // Replace all instances
    const regex = new RegExp(`(?:\\[|<)(${field})(?:\\]|>)`, 'g');
    liveText = liveText.replace(regex, `<span class="bg-accent/20 text-accent px-1 rounded">${value}</span>`);
  });

  // Generate pure text for PDF
  let pdfText = template.templateText;
  fields.forEach(field => {
    const value = formData[field] || `[${field}]`;
    const regex = new RegExp(`(?:\\[|<)(${field})(?:\\]|>)`, 'g');
    pdfText = pdfText.replace(regex, value);
  });

  const downloadPDF = async () => {
    setIsGenerating(true);
    try {
      // Use native jsPDF for crisp, vector-based text and perfect pagination
      // 'pt' (points) is best for typography. A4 is 595.28 x 841.89 pts.
      const pdf = new jsPDF('p', 'pt', 'a4');
      
      const margin = 50;
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const maxLineWidth = pageWidth - margin * 2;
      
      // Title Formatting
      pdf.setFont('times', 'bold');
      pdf.setFontSize(16);
      pdf.text(template.title, pageWidth / 2, margin, { align: 'center' });
      
      // Body Formatting
      pdf.setFont('times', 'normal');
      pdf.setFontSize(12);
      
      // Handle the text. If the text has literal newlines, splitTextToSize respects them
      // and wraps lines that are too long.
      const lines = pdf.splitTextToSize(pdfText, maxLineWidth);
      
      let cursorY = margin + 40;
      const lineHeight = 16;
      
      lines.forEach(line => {
        // If we reach the bottom margin, add a new page
        if (cursorY > pageHeight - margin) {
          pdf.addPage();
          cursorY = margin + 20; // reset cursor for new page
        }
        pdf.text(line, margin, cursorY);
        cursorY += lineHeight;
      });
      
      pdf.save(`${template.title.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Failed to generate PDF', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <Link href="/templates" className="inline-flex items-center text-text-secondary hover:text-text-primary mb-6 transition-colors">
        &larr; Back to Templates
      </Link>
      
      <div className="mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-text-primary mb-2">{template.title}</h1>
        <p className="text-text-secondary">Fill in the details below to generate your legal document.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="glass p-6 sm:p-8 rounded-2xl h-fit">
          <h3 className="text-xl font-semibold mb-6">Document Details</h3>
          
          {fields.length === 0 ? (
            <p className="text-text-secondary mb-4">This template does not require any input fields. You can download it directly.</p>
          ) : (
            <div className="space-y-4 mb-8">
              {fields.map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium text-text-secondary mb-1 capitalize">
                    {field.replace(/_/g, ' ')}
                  </label>
                  <input
                    type="text"
                    value={formData[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    placeholder={`Enter ${field.toLowerCase()}`}
                    className="w-full bg-surface-light border border-primary/20 rounded-xl py-3 px-4 text-text-primary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              ))}
            </div>
          )}

          <button
            onClick={downloadPDF}
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-50"
          >
            {isGenerating ? (
              <span className="animate-pulse">Generating PDF...</span>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </>
            )}
          </button>
        </div>

        {/* Live Preview Section */}
        <div className="glass p-6 sm:p-8 rounded-2xl border border-primary/10 bg-surface/30">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            Live Preview
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </span>
          </h3>
          
          <div 
            ref={documentRef}
            className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed text-text-secondary whitespace-pre-wrap font-sans bg-bg-dark/50 p-6 rounded-xl border border-surface-light"
            dangerouslySetInnerHTML={{ __html: liveText }}
          />
        </div>
      </div>
    </div>
  );
}

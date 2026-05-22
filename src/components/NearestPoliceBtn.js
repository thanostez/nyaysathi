'use client';

import { useState } from 'react';

export default function NearestPoliceBtn({ className = '' }) {
  const [locating, setLocating] = useState(false);
  const [error, setError] = useState(null);
  const [mapUrl, setMapUrl] = useState(null);

  const findNearestPoliceStation = () => {
    setLocating(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Use output=embed to show Google Maps inside an iframe without an API key
        const embedUrl = `https://maps.google.com/maps?q=police+station&ll=${latitude},${longitude}&z=14&output=embed`;
        setMapUrl(embedUrl);
        setLocating(false);
      },
      (err) => {
        console.error(err);
        setError('Please allow location access to find the nearest station.');
        setLocating(false);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <button
          onClick={findNearestPoliceStation}
          disabled={locating}
          className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent text-bg-dark font-bold hover:bg-accent-light transition-colors shadow-lg shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
          aria-label="Find nearest police station using your location"
        >
          {locating ? (
            <div className="size-5 border-2 border-bg-dark/30 border-t-bg-dark rounded-full animate-spin" />
          ) : (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
          {locating ? 'Locating...' : 'Find Nearest Police Station'}
        </button>
        {error && (
          <p className="text-xs text-danger font-medium text-center bg-danger/10 py-1.5 px-3 rounded-lg border border-danger/20">
            {error}
          </p>
        )}
      </div>

      {/* Map Modal */}
      {mapUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-dark/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl h-[80vh] sm:h-[90vh] bg-surface rounded-2xl overflow-hidden border border-primary/20 shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-primary/20 bg-surface-light">
              <h3 className="font-semibold text-lg sm:text-xl text-text-primary flex items-center gap-2 font-[family-name:var(--font-outfit)]">
                <span className="text-2xl" aria-hidden="true">📍</span> Nearest Police Stations
              </h3>
              <button 
                onClick={() => setMapUrl(null)}
                className="p-2 rounded-lg text-text-secondary hover:text-danger hover:bg-danger/10 transition-colors"
                aria-label="Close map"
              >
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Embedded Google Map */}
            <iframe
              src={mapUrl}
              className="flex-1 w-full h-full border-0 bg-white"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Nearest Police Stations Map"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

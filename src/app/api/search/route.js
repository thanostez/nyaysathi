import { searchRights, searchTemplates, searchHelplines } from '@/data';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ rights: [], templates: [], helplines: [] });
  }

  const rights = searchRights(query);
  const templates = searchTemplates(query);
  const helplines = searchHelplines(query);

  return NextResponse.json({ rights, templates, helplines });
}

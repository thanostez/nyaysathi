import {
  searchBlogPosts,
  searchGuides,
  searchHelplines,
  searchRights,
  searchTemplates,
} from '@/data';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({
      rights: [],
      templates: [],
      helplines: [],
      guides: [],
      blogPosts: [],
    });
  }

  const rights = searchRights(query);
  const templates = searchTemplates(query);
  const helplines = searchHelplines(query);
  const guides = searchGuides(query);
  const blogPosts = searchBlogPosts(query);

  return NextResponse.json({ rights, templates, helplines, guides, blogPosts });
}

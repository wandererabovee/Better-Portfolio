import headers from '../../data/headers.json';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type PageKey = keyof typeof headers;

export const load: PageLoad = ({ params }) => {
  const page = params.page as PageKey;

  if (!headers[page]) {
    throw error(404, `Page "${page}" not found`);
  }

  return {
    hero: headers[page]
  };
};

export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  categories: string[];
  controls?: string;
  popularityScore: number;
  status: 'published' | 'draft';
  publishedAt: string;
  iframeCode: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface AdSpace {
  id: string;
  position: 'header' | 'sidebar' | 'in-content';
  content: string;
}
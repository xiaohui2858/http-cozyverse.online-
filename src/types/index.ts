export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  categories: string[];
  controls: string;
  popularityScore: number;
  status: 'published' | 'draft';
  publishedAt: string;
<<<<<<< HEAD
<<<<<<< HEAD
  iframeCode: string;
=======
  gameType: 'canvas' | 'html';
  gameCode: string;
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
=======
  gameType: 'canvas' | 'html';
  gameCode: string;
>>>>>>> ec9fcde8d87b7a21fa7a23217a6003369e93c4f3
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
export interface Project {
  name: string;
  link: string;
  tech: string;
  start: string;
  end: string;
  role: string;
  client: string;
}

export interface CareerItem {
  company: string;
  role: string;
  period: string;
  desc: string;
}

export type CategoryFilter = 'all' | 'framework' | 'static' | 'public' | 'private';

export type SortOption = 'newest' | 'oldest' | 'name';

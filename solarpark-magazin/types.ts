export interface ArticleProps {
  title: string;
  category: string;
  date: string;
}

export interface ImagePlaceholderProps {
  caption: string;
  height?: string;
  iconType?: 'chart' | 'landscape' | 'flow';
}

export interface SidebarItem {
  id: number;
  category: string;
  title: string;
}
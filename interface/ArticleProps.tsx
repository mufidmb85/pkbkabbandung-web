export interface ArticleProps {
  id: string;
  title: string;
  author: string;
  authorId?: string;
  date: Date;
  imageUrl?: string;
  content: string;
  tags?: string[];
  category?: string;
  excerpt?: string;
  slug?: string;
}

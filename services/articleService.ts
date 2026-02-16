
import { Article } from '../types';
import { ARTICLES } from '../constants';

// Currently bypassing Supabase to use hardcoded content directly as requested.
export const ArticleService = {
  
  // Return local constants directly
  getAllArticles: async (): Promise<Article[]> => {
    return ARTICLES;
  },

  // Find article in local constants
  getArticleBySlug: async (slug: string): Promise<Article | undefined> => {
    return ARTICLES.find(a => a.slug === slug);
  }
};

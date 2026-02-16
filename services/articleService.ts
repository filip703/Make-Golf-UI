
import { supabase } from '../lib/supabase';
import { Article } from '../types';
import { ARTICLES } from '../constants'; // Fallback data if DB fails

export const ArticleService = {
  
  // Fetch all articles
  getAllArticles: async (): Promise<Article[]> => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching articles:', error);
        return ARTICLES; // Fallback to hardcoded constants if DB fails
      }

      // Map Supabase snake_case columns to our camelCase Typescript interface if necessary
      // Assuming you named columns correctly in SQL, we can cast directly.
      // If columns differ (e.g. image_url vs image), we map them here:
      return data.map((item: any) => ({
        id: item.id,
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        date: item.date,
        category: item.category,
        image: item.image_url, // Mapping DB column 'image_url' to frontend 'image'
        readTime: item.read_time, // Mapping DB column 'read_time'
        author: {
          name: item.author_name,
          role: item.author_role,
          image: item.author_image_url
        },
        content: item.content // JSONB matches structure automatically
      })) as Article[];

    } catch (err) {
      console.error('Connection error:', err);
      return ARTICLES; // Fallback
    }
  },

  // Fetch a single article by slug
  getArticleBySlug: async (slug: string): Promise<Article | undefined> => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        // If not found in DB, check hardcoded constants (Hybrid approach)
        const fallback = ARTICLES.find(a => a.slug === slug);
        return fallback; 
      }

      if (!data) return undefined;

      return {
        id: data.id,
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        category: data.category,
        image: data.image_url,
        readTime: data.read_time,
        author: {
          name: data.author_name,
          role: data.author_role,
          image: data.author_image_url
        },
        content: data.content
      } as Article;

    } catch (err) {
      console.error('Connection error:', err);
      return ARTICLES.find(a => a.slug === slug);
    }
  }
};

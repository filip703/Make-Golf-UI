
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

      // If DB connects but is empty, fallback to constants so the site isn't empty
      if (!data || data.length === 0) {
        return ARTICLES;
      }

      // Map Supabase columns to our Typescript interface
      // Handles both snake_case (DB standard) and potential direct matches
      return data.map((item: any) => ({
        id: item.id,
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        date: item.date,
        category: item.category,
        // Check for image_url (standard) or image (direct)
        image: item.image_url || item.image, 
        // Check for read_time (standard) or readTime (direct)
        readTime: item.read_time || item.readTime, 
        // Handle author: could be flat columns OR a json object
        author: item.author ? item.author : {
          name: item.author_name,
          role: item.author_role,
          image: item.author_image_url || item.author_image
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

      // If error or no data found in DB, try fallback to constants
      if (error || !data) {
        const fallback = ARTICLES.find(a => a.slug === slug);
        return fallback; 
      }

      // If data found, map it
      return {
        id: data.id,
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        category: data.category,
        image: data.image_url || data.image,
        readTime: data.read_time || data.readTime,
        author: data.author || {
          name: data.author_name,
          role: data.author_role,
          image: data.author_image_url || data.author_image
        },
        content: data.content
      } as Article;

    } catch (err) {
      console.error('Connection error:', err);
      return ARTICLES.find(a => a.slug === slug);
    }
  }
};

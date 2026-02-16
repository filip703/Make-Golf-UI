import { createClient } from '@supabase/supabase-js';

// Safely access environment variables using optional chaining
// Cast import.meta to any to avoid TypeScript errors regarding 'env' property
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env = (import.meta as any).env;

const supabaseUrl = env?.VITE_SUPABASE_URL || '';
const supabaseAnonKey = env?.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Key is missing. Check your .env file. App will run with mock data.');
}

// Initialize Supabase client
// Using placeholder values if env vars are missing to allow the app to initialize
// API calls will fail gracefully in the service layer and fall back to mock data
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
);
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dsfikceaftssoaazhvwv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzZmlrY2VhZnRzc29hYXpodnd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MTM2NzYsImV4cCI6MjA2NDE4OTY3Nn0.TVtwI2INheLjdnwnaZNM0tLuz9URmGZ4MHbH2Akb3fA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
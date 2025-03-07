import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dixbbvkzocpdbiyfazkk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeGJidmt6b2NwZGJpeWZhemtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNzExMjcsImV4cCI6MjA1Njk0NzEyN30.mcHyB2dCGN6sL5WlbEW1rVnpQla1ythIJfMJIg-2AFI";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

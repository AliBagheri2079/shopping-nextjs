import { createClient } from '@supabase/supabase-js';

const supabase_url = 'https://fjxrqjxysjgnlbtwjgks.supabase.co';
const supabase_key =
  process.env.SUPABASE_KEY ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeHJxanh5c2pnbmxidHdqZ2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2ODQ2MjUsImV4cCI6MjAxMjI2MDYyNX0.K56RNTngYMZI9F84bMVrEEqkE03lI-Y_9qcXQo1fisw';

export const supabase = createClient(supabase_url, supabase_key);

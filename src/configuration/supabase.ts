import { SUPABASE_KEY, SUPABASE_URL } from "src/constants/environment";

console.log(SUPABASE_KEY, SUPABASE_URL);

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing Supabase URL or Key");
}

export const supabaseConfig = {
  url: SUPABASE_URL,
  key: SUPABASE_KEY,
  tables: {
    deathCauses: 'deaths',
    diseases: 'diseases',
  },
};
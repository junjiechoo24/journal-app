// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// This is the new, secure way to get your keys
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
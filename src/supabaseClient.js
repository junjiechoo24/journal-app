// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hctsruckvvvzdvyqjeys.supabase.co' // Paste your URL here
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjdHNydWNrdnZ2emR2eXFqZXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1OTY5NzAsImV4cCI6MjA2OTE3Mjk3MH0.LPM6wMfFarcBSYNlOShktTyxlVrtETz81AEvlQPNvAo' // Paste your anon key here

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
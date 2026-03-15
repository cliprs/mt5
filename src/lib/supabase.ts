import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gnpxwxnhrxgxiqutzlha.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImducHh3eG5ocnhneGlxdXR6bGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NzgyMjEsImV4cCI6MjA1NzU1NDIyMX0.X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X' // Not: Gerçek anon key'inizi buraya girmeniz gerekebilir, verdiğiniz publishable key formatı farklıydı.

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

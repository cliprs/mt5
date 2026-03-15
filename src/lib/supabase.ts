import { createClient } from '@supabase/supabase-js'

// Kullanıcının sağladığı bilgilerle bağlantı kuruluyor
const supabaseUrl = 'https://gnpxwxnhrxgxiqutzlha.supabase.co'
const supabaseAnonKey = 'sb_publishable_yw5lhwDMqVSFzr5VJo9OhA_j8nBYVt9' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

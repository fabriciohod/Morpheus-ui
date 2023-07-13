import { createClient } from '@supabase/supabase-js'


export function getClient(url:string , key:string){
    
    return createClient(url, key)
}
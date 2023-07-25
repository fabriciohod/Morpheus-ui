import { createClient } from '@supabase/supabase-js'


export function getClient(url: string, key: string) {
    if (url === undefined || key === undefined)
        return;
    return createClient(url, key)
}
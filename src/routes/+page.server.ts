import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("characters").select();
    return {
        players: data ?? [],
    };
}
import type { SupabaseClient } from "@supabase/supabase-js";
import { writable } from "svelte/store";

export let db = writable<SupabaseClient>();
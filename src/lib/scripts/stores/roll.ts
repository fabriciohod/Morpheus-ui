import { writable } from "svelte/store";
import type { T_RollResult, T_WeaponRollResult } from "../types/dice";

export const RollHistory = writable<(T_RollResult | T_WeaponRollResult)[]>([]);
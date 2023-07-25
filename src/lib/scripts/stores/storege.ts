import { writable } from "svelte/store";
import type { T_EquipmentItem, T_ItemWithRoll, T_SimpleItem, T_Weapon } from "../types/items";

export type T_Inventory = (T_SimpleItem | T_EquipmentItem | T_ItemWithRoll | T_Weapon)[]


export const Bag = writable<T_Inventory>([])
export const Abilitys = writable<T_Inventory>([]);
export const RaceAbilitys = writable<T_Inventory>([])
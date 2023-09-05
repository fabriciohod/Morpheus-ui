import type { C_Attribute } from "$lib/types/C_Attribute";
import type { C_CharInfo } from "$lib/types/C_CharInfo";
import type { C_Item } from "$lib/types/C_Item";
import type { C_Proficiency } from "$lib/types/C_Proficiency";
import type { SystemConfiguration } from "$lib/types/systemConfiguration";
import { writable, type Writable } from "svelte/store";

interface char {
    info: Writable<C_CharInfo>
    attributes: Writable<C_Attribute>
    proficiencys?: Writable<C_Proficiency>
    inventory?: Writable<C_Item>
    abilitys?: Writable<C_Item>
}

export const Character = writable<char>()
export const CurrentSystem = writable<SystemConfiguration>()
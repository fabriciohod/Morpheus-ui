import { writable } from "svelte/store";
import { E_Race, type T_CharInfo } from "../types/character";

const defaultCharInfo: T_CharInfo = {
    name: "",
    class: "",
    race: E_Race.none,
    appearance: "",
    notes: "",
    lore: "",
    objective: "",
    personality: ""
}

export default writable(defaultCharInfo);
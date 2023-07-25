import { get, writable } from "svelte/store";
import { E_Stat, type T_DefensiveStats, type T_Stat } from "../types/stat";

const defensiveStats: T_DefensiveStats = {
    defense: 0,
    doge: 0,
    DEF_equipment: 0,
    DOGE_equipment: 0
}

export const storeDefensiveStats = writable(defensiveStats);

const baseStats: T_Stat[] = [
    { tag: 'CON', name: "Constituição", value: 0, bonus: 0 },
    { tag: 'INT', name: "Intelecto", value: 0, bonus: 0 },
    { tag: 'FOR', name: "Força", value: 0, bonus: 0 },
    { tag: 'DEX', name: "Destreza", value: 0, bonus: 0 },
    { tag: 'CAR', name: "Carisma", value: 0, bonus: 0 },
]


export function FindStat(baseStat: E_Stat | number) {
    switch (baseStat) {
        case E_Stat.CON:
            return get(storeBaseState)[0];
        case E_Stat.INT:
            return get(storeBaseState)[1];
        case E_Stat.FOR:
            return get(storeBaseState)[2];
        case E_Stat.DEX:
            return get(storeBaseState)[3];
        case E_Stat.CAR:
            return get(storeBaseState)[4];
        default:
            return get(storeBaseState)[4];
    }
}
export const storeBaseState = writable(baseStats)
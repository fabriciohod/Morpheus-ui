import { get, writable } from "svelte/store";
import { E_Stat, type T_DefensiveStats, type T_Stat } from "../types/stat";

export namespace DefensiveStats {
    const defensiveStats: T_DefensiveStats = {
        defense: 0,
        doge: 0,
        DEF_equipment: 0,
        DOGE_equipment: 0
    }

    export const store = writable(defensiveStats);
}

export namespace BaseStats {
    const baseStats: T_Stat[] = [
        { tag: 'CON', name: "Constituição", value: 0, bonus: 0 },
        { tag: 'INT', name: "Intelecto", value: 0, bonus: 0 },
        { tag: 'FOR', name: "Força", value: 0, bonus: 0 },
        { tag: 'DEX', name: "Destreza", value: 0, bonus: 0 },
        { tag: 'CAR', name: "Carisma", value: 0, bonus: 0 },
    ]

    export const store = writable(baseStats)

    export function FindBaseStat(baseStat: E_Stat) {
        switch (baseStat) {
            case E_Stat.CON:
                return get(store)[0];
            case E_Stat.INT:
                return get(store)[1];
            case E_Stat.FOR:
                return get(store)[2];
            case E_Stat.DEX:
                return get(store)[3];
            case E_Stat.CAR:
                return get(store)[4];
        }
    }
}

import { writable, get } from "svelte/store";

import * as types from './scripts/types';

const defaultProficiencys: types.Proficiency[] = [
    { name: "Pilotagem", upgraded: false, value: 0, use: [types.UseStat.DEX, types.UseStat.INT], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Tiro", upgraded: false, value: 0, use: [types.UseStat.DEX, types.UseStat.FOR], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Lâmina", upgraded: false, value: 0, use: [types.UseStat.DEX, types.UseStat.FOR], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Charlata", upgraded: false, value: 0, use: [types.UseStat.CAR, types.UseStat.INT], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Percepção", upgraded: false, value: 0, use: [types.UseStat.INT], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Enganação", upgraded: false, value: 0, use: [types.UseStat.CAR, types.UseStat.INT], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Intimidação", upgraded: false, value: 0, use: [types.UseStat.CAR, types.UseStat.CON], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Investigação", upgraded: false, value: 0, use: [types.UseStat.INT], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Atletismo", upgraded: false, value: 0, use: [types.UseStat.DEX], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Rusticidade", upgraded: false, value: 0, use: [types.UseStat.CON, types.UseStat.FOR], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Vontade", upgraded: false, value: 0, use: [types.UseStat.INT], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Eng.Mecânica", upgraded: false, value: 0, use: [types.UseStat.INT], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Eng.Armamentista", upgraded: false, value: 0, use: [types.UseStat.INT], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Historia", upgraded: false, value: 0, use: [types.UseStat.INT], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
    { name: "Luta", upgraded: false, value: 0, use: [types.UseStat.FOR, types.UseStat.DEX], selectedIndex: 0, training: types.TrainingLevel.Leigo, bonus: 0 },
]

const defaultMainStats: types.Stat[] = [
    { tag: 'CON', name: "Constituição", value: 0, bonus: 0 },
    { tag: 'INT', name: "Intelecto", value: 0, bonus: 0 },
    { tag: 'FOR', name: "Força", value: 0, bonus: 0 },
    { tag: 'DEX', name: "Destreza", value: 0, bonus: 0 },
    { tag: 'CAR', name: "Carisma", value: 0, bonus: 0 },
]

const defaultCharInfo: types.CharInfo = {
    name: "",
    class: "",
    race: types.RaceEnum.none,
    appearance: "",
    notes: "",
    lore: "",
    objective: "",
    personality: ""
}

const defaultDefensiveStats: types.DefensiveStats = {
    defense: 0,
    doge: 0,
    DEF_equipment: 0,
    DOGE_equipment: 0
}

export const GetBaseStat = (stat: types.UseStat) => {
    switch (stat) {
        case types.UseStat.CON:
            return get(MainStats)[0];
        case types.UseStat.INT:
            return get(MainStats)[1];
        case types.UseStat.FOR:
            return get(MainStats)[2];
        case types.UseStat.DEX:
            return get(MainStats)[3];
        case types.UseStat.CAR:
            return get(MainStats)[4];
    }
};

export const GetProficiency = (proficiency: types.ProficiencysEnum) => {
    switch (proficiency) {
        case types.ProficiencysEnum.Pilotagem:
            return get(MainProficiencys)[0];
        case types.ProficiencysEnum.Tiro:
            return get(MainProficiencys)[1];
        case types.ProficiencysEnum.Lamina:
            return get(MainProficiencys)[2];
        case types.ProficiencysEnum.Charlata:
            return get(MainProficiencys)[3];
        case types.ProficiencysEnum.Percepção:
            return get(MainProficiencys)[4];
        case types.ProficiencysEnum.Enganação:
            return get(MainProficiencys)[5];
        case types.ProficiencysEnum.Intimidação:
            return get(MainProficiencys)[6];
        case types.ProficiencysEnum.Investigação:
            return get(MainProficiencys)[7];
        case types.ProficiencysEnum.Atletismo:
            return get(MainProficiencys)[8];
        case types.ProficiencysEnum.Rusticidade:
            return get(MainProficiencys)[9];
        case types.ProficiencysEnum.Vontade:
            return get(MainProficiencys)[10];
        case types.ProficiencysEnum.EngMecânica:
            return get(MainProficiencys)[11];
        case types.ProficiencysEnum.EngArmamentista:
            return get(MainProficiencys)[12];
        case types.ProficiencysEnum.Historia:
            return get(MainProficiencys)[13];
        case types.ProficiencysEnum.Luta:
            return get(MainProficiencys)[14];
    }
};

export const GetValueProficiency = (prof: types.Proficiency) => {
    let multiplier: number;

    switch (prof.training) {
        case types.TrainingLevel.Leigo:
            multiplier = 0;
            break;
        case types.TrainingLevel.Treinado:
            if (prof.upgraded)
                multiplier = 1;
            else
                multiplier = 0.5;

            if (prof.use.length > 1) {
                if (prof.use[prof.selectedIndex] == prof.use[0])
                    break

                multiplier = 0.25;

                if (prof.upgraded)
                    multiplier = 0.5
                break
            }
            break;
    }

    const res = Math.floor(get(MainStats)[prof.use[prof.selectedIndex]].value * multiplier)
    return res;
};

export const CharacterData = writable<types.CharInfo>(defaultCharInfo);

export const MainStats = writable<types.Stat[]>(defaultMainStats)
export const MainProficiencys = writable<types.Proficiency[]>(defaultProficiencys);
export const MainDefensiveStats = writable<types.DefensiveStats>(defaultDefensiveStats);

export const Abilitys = writable<types.Inventory>([]);
export const RaceAbilitys = writable<types.Inventory>([])
export const PinnedAbilitys = writable<types.Inventory>([])

export const Bag = writable<types.Inventory>([])
export const PinnedItems = writable<types.Inventory>([])

export const HpBar = writable<types.RuntimeBar>({ maxValue: 0, currentValue: 0 });
export const ApBar = writable<types.RuntimeBar>({ maxValue: 0, currentValue: 0 });

export const RollHistory = writable<types.RollResult[]>([]);
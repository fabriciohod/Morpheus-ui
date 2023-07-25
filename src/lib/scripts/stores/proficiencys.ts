import { get, writable } from "svelte/store";
import { E_Proficiencys, E_TrainingLevel, type T_Proficiency } from "../types/proficiencys";
import { E_Stat } from "../types/stat";
import { BaseStats } from "./stats";

export namespace Proficiency {
    const defaultProficiencys: T_Proficiency[] = [
        { name: "Pilotagem", upgraded: false, value: 0, use: [E_Stat.DEX, E_Stat.INT], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Tiro", upgraded: false, value: 0, use: [E_Stat.DEX, E_Stat.FOR], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Lâmina", upgraded: false, value: 0, use: [E_Stat.DEX, E_Stat.FOR], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Charlata", upgraded: false, value: 0, use: [E_Stat.CAR, E_Stat.INT], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Percepção", upgraded: false, value: 0, use: [E_Stat.INT], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Enganação", upgraded: false, value: 0, use: [E_Stat.CAR, E_Stat.INT], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Intimidação", upgraded: false, value: 0, use: [E_Stat.CAR, E_Stat.CON], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Investigação", upgraded: false, value: 0, use: [E_Stat.INT], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Atletismo", upgraded: false, value: 0, use: [E_Stat.DEX], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Rusticidade", upgraded: false, value: 0, use: [E_Stat.CON, E_Stat.FOR], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Vontade", upgraded: false, value: 0, use: [E_Stat.INT], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Eng.Mecânica", upgraded: false, value: 0, use: [E_Stat.INT], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Eng.Armamentista", upgraded: false, value: 0, use: [E_Stat.INT], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Historia", upgraded: false, value: 0, use: [E_Stat.INT], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
        { name: "Luta", upgraded: false, value: 0, use: [E_Stat.FOR, E_Stat.DEX], selectedIndex: 0, training: E_TrainingLevel.Leigo, bonus: 0 },
    ]

    function FindProficiency(proficiency: E_Proficiencys) {
        switch (proficiency) {
            case E_Proficiencys.Pilotagem:
                return get(store)[0];
            case E_Proficiencys.Tiro:
                return get(store)[1];
            case E_Proficiencys.Lamina:
                return get(store)[2];
            case E_Proficiencys.Charlata:
                return get(store)[3];
            case E_Proficiencys.Percepção:
                return get(store)[4];
            case E_Proficiencys.Enganação:
                return get(store)[5];
            case E_Proficiencys.Intimidação:
                return get(store)[6];
            case E_Proficiencys.Investigação:
                return get(store)[7];
            case E_Proficiencys.Atletismo:
                return get(store)[8];
            case E_Proficiencys.Rusticidade:
                return get(store)[9];
            case E_Proficiencys.Vontade:
                return get(store)[10];
            case E_Proficiencys.EngMecânica:
                return get(store)[11];
            case E_Proficiencys.EngArmamentista:
                return get(store)[12];
            case E_Proficiencys.Historia:
                return get(store)[13];
            case E_Proficiencys.Luta:
                return get(store)[14];
        }
    };


    export function GetValueProficiency(prof: T_Proficiency) {
        let multiplier: number;

        switch (prof.training) {
            case E_TrainingLevel.Leigo:
                multiplier = 0;
                break;
            case E_TrainingLevel.Treinado:
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

        const res = Math.floor(get(BaseStats.store)[prof.use[prof.selectedIndex]].value * multiplier)
        return res;
    };

    export function FindAndGetValue(prof: E_Proficiencys) {
        return GetValueProficiency(FindProficiency(prof))
    }

    export const store = writable(defaultProficiencys);
}

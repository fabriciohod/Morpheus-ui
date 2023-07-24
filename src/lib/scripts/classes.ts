import { get } from "svelte/store";
import { TrainingLevel, UseStat } from "./types";
import { MainStats } from "$lib/characterData";

export class Proficiency {
    constructor(
        public name: string,
        public upgraded: boolean = false,
        public training: TrainingLevel = TrainingLevel.Leigo,
        private value: number = -1,
        public bonus: number = 0,
        public use: UseStat[] = [],
        public selectedIndex: number = 0
    ) { }

    get getValue(): number {
        if (this.value > 0)
            return this.value

        let trainingMultiplier = 0;
        let useMultiplier = 1;

        if (this.training === TrainingLevel.Treinado) {
            trainingMultiplier = this.upgraded ? 1 : 0.5;

            if (this.use.length > 1 && this.use[this.selectedIndex] !== this.use[0]) {
                useMultiplier = this.upgraded ? 0.5 : 0.25;
            }
        }

        const baseValue = get(MainStats)[this.use[this.selectedIndex]];
        return this.value = Math.floor(baseValue.value * trainingMultiplier * useMultiplier);
    }
}

export const defaultProficiencys = [
    new Proficiency("Pilotagem", false, 0, [UseStat.DEX, UseStat.INT], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Tiro", false, 0, [UseStat.DEX, UseStat.FOR], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Lâmina", false, 0, [UseStat.DEX, UseStat.FOR], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Charlata", false, 0, [UseStat.CAR, UseStat.INT], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Percepção", false, 0, [UseStat.INT], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Enganação", false, 0, [UseStat.CAR, UseStat.INT], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Intimidação", false, 0, [UseStat.CAR, UseStat.CON], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Investigação", false, 0, [UseStat.INT], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Atletismo", false, 0, [UseStat.DEX], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Rusticidade", false, 0, [UseStat.CON, UseStat.FOR], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Vontade", false, 0, [UseStat.INT], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Eng.Mecânica", false, 0, [UseStat.INT], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Eng.Armamentista", false, 0, [UseStat.INT], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Historia", false, 0, [UseStat.INT], 0, TrainingLevel.Leigo, 0),
    new Proficiency("Luta", false, 0, [UseStat.FOR, UseStat.DEX], 0, TrainingLevel.Leigo, 0),
]
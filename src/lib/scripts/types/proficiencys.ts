import type { E_Stat } from "./stat";

export enum E_Proficiencys {
    Pilotagem,
    Tiro,
    Lamina,
    Charlata,
    Percepção,
    Enganação,
    Intimidação,
    Investigação,
    Atletismo,
    Rusticidade,
    Vontade,
    EngMecânica,
    EngArmamentista,
    Historia,
    Luta,
}

export enum E_TrainingLevel {
    Leigo,
    Treinado,
}

export type T_Proficiency = {
    name: string;
    upgraded: boolean;
    training: E_TrainingLevel
    value: number;
    bonus: number;
    use: E_Stat[];
    selectedIndex: number;
};



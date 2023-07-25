import { writable } from "svelte/store";

export enum E_Race {
    none,
    Humano,
    Ehi,
    AndromedaEhi,
    Kletka,
    Tockta,
    Fuwus,
    AnkemoDor,
    DaeHonis,
    Cephacto,
    Uworcus,
    Wux,
    Emordoris,
    HonTas,
    Panzer,
    Carjarel,
    Baalzuc
}

type Bio = {
    appearance: string;
    notes: string;
    lore: string;
    objective: string;
    personality: string;
};


export type T_CharInfo = {
    name: string;
    class: string;
    race: E_Race;
} & Bio;

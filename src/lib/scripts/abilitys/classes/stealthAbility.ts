import { E_DiceType } from "$lib/scripts/types/dice";
import { E_Proficiencys } from "$lib/scripts/types/proficiencys";
import type { T_ItemWithRoll, T_SimpleItem } from "$lib/scripts/types/items";
import { E_Stat } from "$lib/scripts/types/stat";

export const Operador: (T_ItemWithRoll | T_SimpleItem)[] = [
    {
        name: "Pés velozes",
        description: "Consegue andar bem mais rápido (ganha +2 destreza e +1 atletismo)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.DEX],
        proficiencys: [E_Proficiencys.Atletismo],
        pinned: false
    },
    {
        name: "Recarga",
        description: "Consegue recarregar e atacar no mesmo turno (somente uma vez por cena)",
        pinned: false
    },
    {
        name: "Ritmo Fatal",
        description: "Consegue realizar mais de um ataque no mesmo turno (somente uma vez por cena)",
        pinned: false
    },
];

export const Fantasma: T_ItemWithRoll[] = [
    {
        name: "Aqui estava",
        description: "Deixa um clone holográfico (duração sustentada)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [],
        pinned: false
    },
    {
        name: "Invisibilidade",
        description: "Pode ficar invisível (duração sustentada)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [],
        pinned: false
    },
    {
        name: "Ali eu estava",
        description: "Consegue se teleportar pro clone holográfico",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [],
        pinned: false
    },
];

export const Comando: T_ItemWithRoll[] = [
    {
        name: "Ataque de oportunidade",
        description: "Consegue sacar rapidamente o armamento e atacar sem o inimigo reagir (só funciona quando a luta não foi iniciada) (ganha +2 força)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.DEX],
        proficiencys: [],
        pinned: false
    },
    {
        name: "Do nada",
        description: "Pode atacar primeiro que qualquer inimigo independente da iniciativa (só vale 1 vez por cena) (ganha +2 força)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.DEX],
        proficiencys: [],
        pinned: false
    },
    {
        name: "Desligar",
        description: "Consegue desacordar qualquer ser biológico e stunar qualquer ser robótico (ganha +4 força e +2 luta)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.FOR],
        proficiencys: [E_Proficiencys.Luta],
        pinned: false
    },
];

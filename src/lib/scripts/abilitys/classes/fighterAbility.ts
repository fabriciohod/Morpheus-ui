import { E_DiceType } from "$lib/scripts/types/dice";
import { E_Proficiencys } from "$lib/scripts/types/proficiencys";
import type { T_ItemWithRoll } from "$lib/scripts/types/items";
import { E_Stat } from "$lib/scripts/types/stat";

export const Berserker: T_ItemWithRoll[] = [
    {
        name: "Porrada",
        description: "Desce a porrada em alguém (ganha +2 em força e 1 em luta)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.FOR],
        proficiencys: [E_Proficiencys.Luta],
        pinned: false
    },
    {
        name: "Cotovelo Foguete",
        description: "Desce a porrada mais forte ainda em alguém (ganha +3 em força e 2 em luta)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.FOR],
        proficiencys: [E_Proficiencys.Luta],
        pinned: false
    },
    {
        name: "Cacetada",
        description: "Desce o cacete em alguém (ganha +4 em força e +3 em luta)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.FOR],
        proficiencys: [E_Proficiencys.Luta],
        pinned: false
    },
];

export const Tank: T_ItemWithRoll[] = [
    {
        name: "Duro como pedra",
        description: "Se prepara para ser resistente a dano (+2 constituição e +1 rusticidade)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.CON],
        proficiencys: [E_Proficiencys.Rusticidade],
        pinned: false
    },
    {
        name: "Muro",
        description: "Se prepara para ser mais resistente a dano (+3 constituição e +2 rusticidade)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.CON],
        proficiencys: [E_Proficiencys.Rusticidade],
        pinned: false
    },
    {
        name: "Montanha",
        description: "Se prepara para ser a resistência em ser(+4 constituição e +3 rusticidade)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.CON],
        proficiencys: [E_Proficiencys.Rusticidade],
        pinned: false
    },
];

export const Briguento: T_ItemWithRoll[] = [
    {
        name: "O dobro do preço",
        description: "Acha uma brecha para poder bater mais (ganha +2 destreza e +1 luta)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.DEX],
        proficiencys: [E_Proficiencys.Luta],
        pinned: false
    },
    {
        name: "Mãos Velozes",
        description: "Acha uma brecha melhor para poder bater mais (ganha +3 destreza e +2 luta)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.DEX],
        proficiencys: [E_Proficiencys.Luta],
        pinned: false
    },
    {
        name: "Pancada",
        description: "Acha uma brecha perfeita para poder bater mais (ganha +4 destreza e +3 luta)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.DEX],
        proficiencys: [E_Proficiencys.Luta],
        pinned: false
    },
];
import { E_DiceType } from "$lib/scripts/types/dice";
import { E_Proficiencys } from "$lib/scripts/types/proficiencys";
import type { T_ItemWithRoll } from "$lib/scripts/types/items";
import { E_Stat } from "$lib/scripts/types/stat";

export const Regulador: T_ItemWithRoll[] = [
    {
        name: "Tranqueira",
        description: "Consegue reconhecer a engenharia de qualquer tranqueira (ganha +2 inteligência e +1 engenharia mec nica)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [E_Proficiencys.EngMecânica],
        pinned: false
    },
    {
        name: "Novas Rotas",
        description: "Consegue achar um jeito melhor de chegar em algum lugar no gps (ganha +2 inteligência e +1 engenharia mec nica)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [E_Proficiencys.EngMecânica],
        pinned: false
    },
    {
        name: "Up",
        description: "Consegue atualizar partes da nave em pouquíssimo tempo (ganha +3 inteligência e +2 engenharia mec nica)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [E_Proficiencys.EngMecânica],
        pinned: false
    },
];

export const Academico: T_ItemWithRoll[] = [
    {
        name: "Enciclopédia",
        description: "Consegue relembrar de fatos e coisas importantes na história (ganha +2 inteligência e +1 história)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [E_Proficiencys.Historia],
        pinned: false
    },
    {
        name: "Convencimento",
        description: "Consegue usar seu conhecimento para convencer alguém de algo (ganha +2 carisma e +1 charlate)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT, E_Stat.CAR],
        proficiencys: [E_Proficiencys.Historia],
        pinned: false
    },
    {
        name: "Examinar",
        description: "Consegue examinar as coisas bem mais profundamente (ganha +2 inteligência e +1 investigação)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [E_Proficiencys.Historia],
        pinned: false
    },
];

export const Armeiro: T_ItemWithRoll[] = [
    {
        name: "Reconhecimento",
        description: "Consegue reconhecer a engenharia de qualquer arma (ganha +2 inteligência e +1 Eng.armamentista)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [E_Proficiencys.EngArmamentista],
        pinned: false
    },
    {
        name: "Modificar",
        description: "Consegue atualizar partes de armas em pouquíssimo tempo (ganha +3 inteligência e +2 engenharia Eng.mecânica)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [E_Proficiencys.EngArmamentista],
        pinned: false
    },
    {
        name: "Qualquer uma",
        description: "Consegue utilizar qualquer tipo armas( ganha +3 inteligência e +2 engenharia Eng.mecânica)",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [E_Stat.INT],
        proficiencys: [E_Proficiencys.EngArmamentista],
        pinned: false
    },
];

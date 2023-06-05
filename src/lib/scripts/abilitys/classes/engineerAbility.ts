import { DiceType, ProficiencysEnum, type ItemWithRoll, UseStat } from '../../types';

export const Regulador: ItemWithRoll[] = [
    {
        name: "Tranqueira",
        description: "Consegue reconhecer a engenharia de qualquer tranqueira (ganha +2 inteligência e +1 engenharia mec nica)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: [ProficiencysEnum.EngMecânica]
    },
    {
        name: "Novas Rotas",
        description: "Consegue achar um jeito melhor de chegar em algum lugar no gps (ganha +2 inteligência e +1 engenharia mec nica)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: [ProficiencysEnum.EngMecânica]
    },
    {
        name: "Up",
        description: "Consegue atualizar partes da nave em pouquíssimo tempo (ganha +3 inteligência e +2 engenharia mec nica)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: [ProficiencysEnum.EngMecânica]
    },
];

export const Academico: ItemWithRoll[] = [
    {
        name: "Enciclopédia",
        description: "Consegue relembrar de fatos e coisas importantes na história (ganha +2 inteligência e +1 história)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: [ProficiencysEnum.Historia]
    },
    {
        name: "Convencimento",
        description: "Consegue usar seu conhecimento para convencer alguém de algo (ganha +2 carisma e +1 charlate)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.INT, UseStat.CAR],
        proficiencys: [ProficiencysEnum.Historia]
    },
    {
        name: "Examinar",
        description: "Consegue examinar as coisas bem mais profundamente (ganha +2 inteligência e +1 investigação)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: [ProficiencysEnum.Historia]
    },
];

export const Armeiro: ItemWithRoll[] = [
    {
        name: "Reconhecimento",
        description: "Consegue reconhecer a engenharia de qualquer arma (ganha +2 inteligência e +1 Eng.armamentista)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: [ProficiencysEnum.EngArmamentista]
    },
    {
        name: "Modificar",
        description: "Consegue atualizar partes de armas em pouquíssimo tempo (ganha +3 inteligência e +2 engenharia Eng.mecânica)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: [ProficiencysEnum.EngArmamentista]
    },
    {
        name: "Qualquer uma",
        description: "Consegue utilizar qualquer tipo armas( ganha +3 inteligência e +2 engenharia Eng.mecânica)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: [ProficiencysEnum.EngArmamentista]
    },
];

import { DiceType, ProficiencysEnum, type ItemWithRoll, UseStat } from '../../types';

export const Berserker: ItemWithRoll[] = [
    {
        name: "Porrada",
        description: "Desce a porrada em alguém (ganha +2 em força e 1 em luta)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.FOR],
        proficiencys: [ProficiencysEnum.Luta]
    },
    {
        name: "Cotovelo Foguete",
        description: "Desce a porrada mais forte ainda em alguém (ganha +3 em força e 2 em luta)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.FOR],
        proficiencys: [ProficiencysEnum.Luta]
    },
    {
        name: "Cacetada",
        description: "Desce o cacete em alguém (ganha +4 em força e +3 em luta)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.FOR],
        proficiencys: [ProficiencysEnum.Luta]
    },
];

export const Tank: ItemWithRoll[] = [
    {
        name: "Duro como pedra",
        description: "Se prepara para ser resistente a dano (+2 constituição e +1 rusticidade)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.CON],
        proficiencys: [ProficiencysEnum.Rusticidade]
    },
    {
        name: "Muro",
        description: "Se prepara para ser mais resistente a dano (+3 constituição e +2 rusticidade)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.CON],
        proficiencys: [ProficiencysEnum.Rusticidade]
    },
    {
        name: "Montanha",
        description: "Se prepara para ser a resistência em ser(+4 constituição e +3 rusticidade)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.CON],
        proficiencys: [ProficiencysEnum.Rusticidade]
    },
];

export const Briguento: ItemWithRoll[] = [
    {
        name: "O dobro do preço",
        description: "Acha uma brecha para poder bater mais (ganha +2 destreza e +1 luta)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.DEX],
        proficiencys: [ProficiencysEnum.Luta]
    },
    {
        name: "Mãos Velozes",
        description: "Acha uma brecha melhor para poder bater mais (ganha +3 destreza e +2 luta)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.DEX],
        proficiencys: [ProficiencysEnum.Luta]
    },
    {
        name: "Pancada",
        description: "Acha uma brecha perfeita para poder bater mais (ganha +4 destreza e +3 luta)",
        rollTimes: 1,
        diceToRoll: DiceType.D20,
        baseStat: [UseStat.DEX],
        proficiencys: [ProficiencysEnum.Luta]
    },
];
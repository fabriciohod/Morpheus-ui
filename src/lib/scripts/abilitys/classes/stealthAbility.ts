import { DiceType, ProficiencysEnum, type ItemWithRoll, UseStat, type SimpleItem } from '../../types';

export const Operador: (ItemWithRoll | SimpleItem)[] = [
    {
        name: "Pés velozes",
        description: "Consegue andar bem mais rápido (ganha +2 destreza e +1 atletismo)",
        rollTimes: 1,
        hitDice: DiceType.D20,
        baseStat: [UseStat.DEX],
        proficiencys: [ProficiencysEnum.Atletismo]
    },
    {
        name: "Recarga",
        description: "Consegue recarregar e atacar no mesmo turno (somente uma vez por cena)",
    },
    {
        name: "Ritmo Fatal",
        description: "Consegue realizar mais de um ataque no mesmo turno (somente uma vez por cena)",
    },
];

export const Fantasma: ItemWithRoll[] = [
    {
        name: "Aqui estava",
        description: "Deixa um clone holográfico (duração sustentada)",
        rollTimes: 1,
        hitDice: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: []
    },
    {
        name: "Invisibilidade",
        description: "Pode ficar invisível (duração sustentada)",
        rollTimes: 1,
        hitDice: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: []
    },
    {
        name: "Ali eu estava",
        description: "Consegue se teleportar pro clone holográfico",
        rollTimes: 1,
        hitDice: DiceType.D20,
        baseStat: [UseStat.INT],
        proficiencys: []
    },
];

export const Comando: ItemWithRoll[] = [
    {
        name: "Ataque de oportunidade",
        description: "Consegue sacar rapidamente o armamento e atacar sem o inimigo reagir (só funciona quando a luta não foi iniciada) (ganha +2 força)",
        rollTimes: 1,
        hitDice: DiceType.D20,
        baseStat: [UseStat.DEX],
        proficiencys: []
    },
    {
        name: "Do nada",
        description: "Pode atacar primeiro que qualquer inimigo independente da iniciativa (só vale 1 vez por cena) (ganha +2 força)",
        rollTimes: 1,
        hitDice: DiceType.D20,
        baseStat: [UseStat.DEX],
        proficiencys: []
    },
    {
        name: "Desligar",
        description: "Consegue desacordar qualquer ser biológico e stunar qualquer ser robótico (ganha +4 força e +2 luta)",
        rollTimes: 1,
        hitDice: DiceType.D20,
        baseStat: [UseStat.FOR],
        proficiencys: [ProficiencysEnum.Luta]
    },
];

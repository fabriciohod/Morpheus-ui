import { DiceType, ProficiencysEnum, type Weapon, UseStat } from "../types";

export const fireArms: Weapon[] = [
    {
        name: "Rifle",
        description: "Mediana potência, mira e recarga</br>2 ações de dano antes de recarregar",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D10,
        damageDice_rollTimes: 2,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [ProficiencysEnum.Tiro],
        pinned: false
    },
    {
        name: "Metralhadora",
        description: "Altíssima potência e recarga mas nenhuma mira</br>4 ações de dano antes de recarregar",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D12,
        damageDice_rollTimes: 3,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [ProficiencysEnum.Tiro],
        pinned: false
    },
    {
        name: "Pistola",
        description: "Pouca potencia, mas alta recarga e mira</br>3 ações de dano antes de recarregar",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        mainStatBonus: [],
        damageDice: DiceType.D6,
        damageDice_rollTimes: 2,
        damageBonusFlat: 0,
        profBonus: [ProficiencysEnum.Tiro],
        pinned: false
    },
    {
        name: "SMG",
        description: "Pouca potência e mira, mas altíssima recarga</br>4 ações de dano antes de recarregar",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D8,
        damageDice_rollTimes: 2,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [ProficiencysEnum.Tiro],
        pinned: false
    },
    {
        name: "Escopeta",
        description: "Altíssima potência, porém pouca mira e recarga</br>1 ação de dano antes de recarregar",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D20,
        damageDice_rollTimes: 1,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [],
        pinned: false
    }
]

export const melee: Weapon[] = [

    {
        name: "Espada",
        description: "Foco em corte, pode usar perfuração</br>pode realizar 2 ataques",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D8,
        damageDice_rollTimes: 2,
        damageBonusFlat: 0,
        mainStatBonus: [UseStat.DEX],
        profBonus: [],
        pinned: false
    },
    {
        name: "Lança",
        description: "Foco em perfuração, pode usar impacto</br>pode atacar de uma distancia média",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D8,
        damageDice_rollTimes: 3,
        damageBonusFlat: 0,
        mainStatBonus: [UseStat.FOR],
        profBonus: [],
        pinned: false
    },
    {
        name: "Machado",
        description: "foco em impacto, pode usar corte</br>porém com maior peso e menor mobilidade",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D10,
        damageDice_rollTimes: 3,
        damageBonusFlat: 0,
        mainStatBonus: [UseStat.FOR, UseStat.DEX],
        profBonus: [],
        pinned: false
    },
    {
        name: "Martelos",
        description: "Foco somente em impacto</br>porém com maior peso e pouca mobilidade",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D12,
        damageDice_rollTimes: 3,
        damageBonusFlat: 0,
        mainStatBonus: [UseStat.FOR],
        profBonus: [],
        pinned: false
    }
]

export const explosives: Weapon[] = [
    {
        name: "Granada",
        description: "Pode usar força para jogar longe ou destreza para jogar rápido",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D12,
        damageDice_rollTimes: 4,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [],
        pinned: false
    },
    {
        name: "Mina",
        description: "Pode ser colocada no chão para alvos que passem por cima",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D12,
        damageDice_rollTimes: 6,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [],
        pinned: false
    },
    {
        name: "Lança Foguete",
        description: "1d12 para cada</br>Pode lançar até 4 foguetes antes de recarregar</br>veloz e pode atingir o alvo mais facilmente",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D12,
        damageDice_rollTimes: 1,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [],
        pinned: false
    },
    {
        name: "Lança Granadas",
        description: "2d12 para cada</br>Pode lançar até 4 granadas antes de recarregar</br>potente mas com pouca mira",
        hitDice: DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: DiceType.D12,
        damageDice_rollTimes: 2,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [],
        pinned: false
    },
]
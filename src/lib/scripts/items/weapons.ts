import { E_DiceType } from "../types/dice"
import type { T_Weapon } from "../types/items"
import { E_Proficiencys } from "../types/proficiencys"
import { E_Stat } from "../types/stat"

export const fireArms: T_Weapon[] = [
    {
        name: "Rifle",
        description: "Mediana potência, mira e recarga</br>2 ações de dano antes de recarregar",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D10,
        damageDice_rollTimes: 2,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [E_Proficiencys.Tiro],
        pinned: false
    },
    {
        name: "Metralhadora",
        description: "Altíssima potência e recarga mas nenhuma mira</br>4 ações de dano antes de recarregar",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D12,
        damageDice_rollTimes: 3,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [E_Proficiencys.Tiro],
        pinned: false
    },
    {
        name: "Pistola",
        description: "Pouca potencia, mas alta recarga e mira</br>3 ações de dano antes de recarregar",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        mainStatBonus: [],
        damageDice: E_DiceType.D6,
        damageDice_rollTimes: 2,
        damageBonusFlat: 0,
        profBonus: [E_Proficiencys.Tiro],
        pinned: false
    },
    {
        name: "SMG",
        description: "Pouca potência e mira, mas altíssima recarga</br>4 ações de dano antes de recarregar",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D8,
        damageDice_rollTimes: 2,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [E_Proficiencys.Tiro],
        pinned: false
    },
    {
        name: "Escopeta",
        description: "Altíssima potência, porém pouca mira e recarga</br>1 ação de dano antes de recarregar",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D20,
        damageDice_rollTimes: 1,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [],
        pinned: false
    }
]

export const melee: T_Weapon[] = [

    {
        name: "Espada",
        description: "Foco em corte, pode usar perfuração</br>pode realizar 2 ataques",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D8,
        damageDice_rollTimes: 2,
        damageBonusFlat: 0,
        mainStatBonus: [E_Stat.DEX],
        profBonus: [E_Proficiencys.Lamina],
        pinned: false
    },
    {
        name: "Lança",
        description: "Foco em perfuração, pode usar impacto</br>pode atacar de uma distancia média",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D8,
        damageDice_rollTimes: 3,
        damageBonusFlat: 0,
        mainStatBonus: [E_Stat.FOR],
        profBonus: [E_Proficiencys.Lamina],
        pinned: false
    },
    {
        name: "Machado",
        description: "foco em impacto, pode usar corte</br>porém com maior peso e menor mobilidade",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D10,
        damageDice_rollTimes: 3,
        damageBonusFlat: 0,
        mainStatBonus: [E_Stat.FOR, E_Stat.DEX],
        profBonus: [E_Proficiencys.Lamina],
        pinned: false
    },
    {
        name: "Martelos",
        description: "Foco somente em impacto</br>porém com maior peso e pouca mobilidade",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D12,
        damageDice_rollTimes: 3,
        damageBonusFlat: 0,
        mainStatBonus: [E_Stat.FOR],
        profBonus: [E_Proficiencys.Lamina],
        pinned: false
    }
]

export const explosives: T_Weapon[] = [
    {
        name: "Granada",
        description: "Pode usar força para jogar longe ou destreza para jogar rápido",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D12,
        damageDice_rollTimes: 4,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [],
        pinned: false
    },
    {
        name: "Mina",
        description: "Pode ser colocada no chão para alvos que passem por cima",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D12,
        damageDice_rollTimes: 6,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [],
        pinned: false
    },
    {
        name: "Lança Foguete",
        description: "1d12 para cada</br>Pode lançar até 4 foguetes antes de recarregar</br>veloz e pode atingir o alvo mais facilmente",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D12,
        damageDice_rollTimes: 1,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [],
        pinned: false
    },
    {
        name: "Lança Granadas",
        description: "2d12 para cada</br>Pode lançar até 4 granadas antes de recarregar</br>potente mas com pouca mira",
        hitDice: E_DiceType.D20,
        hitDice_rollTimes: 1,
        hitDiceBonusFlat: 0,
        damageDice: E_DiceType.D12,
        damageDice_rollTimes: 2,
        damageBonusFlat: 0,
        mainStatBonus: [],
        profBonus: [],
        pinned: false
    },
]
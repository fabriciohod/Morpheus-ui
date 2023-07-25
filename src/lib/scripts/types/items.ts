import type { E_DiceType } from "./dice";
import type { E_Proficiencys } from "./proficiencys";
import type { E_Stat } from "./stat";

export enum E_StatModifiers {
    Defesa, Esquiva
}

export type T_SimpleItem = {
    name: string;
    description: string;
    pinned: boolean
}

export type T_EquipmentItem = {
    modifyStat: E_StatModifiers;
    value: number;
    isEquip: boolean;
} & T_SimpleItem;

export type T_ItemWithRoll = {
    rollTimes: number;
    diceToRoll: E_DiceType;
    baseStat: E_Stat[];
    proficiencys: E_Proficiencys[];
} & T_SimpleItem;

export type T_Weapon = {
    hitDice: E_DiceType;
    hitDice_rollTimes: number;
    hitDiceBonusFlat: number;
    damageDice: E_DiceType;
    damageDice_rollTimes: number;
    damageBonusFlat: number;
    mainStatBonus: (E_Stat)[];
    profBonus: E_Proficiencys[];
} & T_SimpleItem
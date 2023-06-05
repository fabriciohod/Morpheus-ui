
export enum UseStat {
    CON, INT, FOR, DEX, CAR
}

export enum DiceType {
    D20 = 20, D12 = 12, D10 = 10, D8 = 8, D6 = 6, D4 = 4
}

export enum StatModifiers {
    Defesa, Esquiva
}

export enum TrainingLevel {
    Leigo,
    Treinado,
}

export enum ProficiencysEnum {
    Pilotagem,
    Tiro,
    Lamina,
    Charlata,
    Percepção,
    Enganação,
    Intimidação,
    Investigação,
    Atletismo,
    Rusticidade,
    Vontade,
    EngMecânica,
    EngArmamentista,
    Historia,
    Luta,
}

export enum RaceEnum {
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

export type DefensiveStats = {
    defense: number;
    doge: number;
    DEF_equipment: number;
    DOGE_equipment: number;
};

export type RuntimeBar = {
    maxValue: number;
    currentValue: number;
};

export type CharInfo = {
    name: string;
    class: string;
    race: RaceEnum;
} & CharBio;

type CharBio = {
    appearance: string;
    notes: string;
    lore: string;
    objective: string;
    personality: string;
};

export type Stat = {
    tag: string;
    name: string;
    value: number;
    bonus: number;
};

export type Proficiency = {
    name: string;
    upgraded: boolean;
    training: TrainingLevel
    value: number;
    bonus: number;
    use: UseStat[];
    selectedIndex: number;
};

export type RollResult = {
    name: string,
    individualRolls: number[],
    rollSummary: string;
    result: number;
};
export type WeaponRollResult = {
    hitRes: RollResult;
    damageRes: RollResult;
}

export type Inventory = (SimpleItem | EquipmentItem | ItemWithRoll | Weapon)[]

export type SimpleItem = {
    name: string;
    description: string;
    pinned: boolean
}

export type EquipmentItem = {
    modifyStat: StatModifiers;
    value: number;
    isEquip: boolean;
} & SimpleItem;

export type ItemWithRoll = {
    rollTimes: number;
    diceToRoll: DiceType;
    baseStat: UseStat[];
    proficiencys: ProficiencysEnum[];
} & SimpleItem;

export type Weapon = {
    hitDice: DiceType;
    hitDice_rollTimes: number;
    hitDiceBonusFlat: number;
    damageDice: DiceType;
    damageDice_rollTimes: number;
    damageBonusFlat: number;
    mainStatBonus: (UseStat)[];
    profBonus: (ProficiencysEnum)[];
} & SimpleItem
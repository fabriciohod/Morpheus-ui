export enum E_Stat {
    CON, INT, FOR, DEX, CAR
}

export type T_Stat = {
    tag: string;
    name: string;
    value: number;
    bonus: number;
};

export type T_DefensiveStats = {
    defense: number;
    doge: number;
    DEF_equipment: number;
    DOGE_equipment: number;
};
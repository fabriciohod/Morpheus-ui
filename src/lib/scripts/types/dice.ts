export enum E_DiceType {
    D20 = 20, D12 = 12, D10 = 10, D8 = 8, D6 = 6, D4 = 4
}

export type T_RollResult = {
    name: string,
    individualRolls: number[],
    rollSummary: string;
    result: number;
    isCrit: boolean
};
export type T_WeaponRollResult = {
    hitRes: T_RollResult;
    damageRes: T_RollResult;
}

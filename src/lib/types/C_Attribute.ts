export class C_Attribute {
    name: string;
    label: string;
    value: number;
    diceRoll?: number;
    bonus?: number;
    multiplier?: number;
    constructor(
        name: string,
        label: string,
        value: number,
        diceRoll: number,
        bonus: number,
        multiplier: number
    ) {
        this.name = name;
        this.label = label;
        this.value = value;
        this.diceRoll = diceRoll;
        this.bonus = bonus;
        this.multiplier = multiplier;
    }
}

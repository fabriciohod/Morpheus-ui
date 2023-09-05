export class C_Proficiency {
    name: string;
    label: string;
    value: number;
    diceRoll?: number;
    bonus?: number;
    use?: Array<string>; // ex: ["INT, DEX"] or ["INT"]
    constructor(
        name: string,
        label: string,
        value: number,
        diceRoll: number,
        bonus: number = 0,
        use: Array<string>
    ) {
        this.name = name;
        this.label = label;
        this.value = value;
        this.diceRoll = diceRoll;
        this.bonus = bonus;
        this.use = use;
    }
    roll() {
        return "Roll";
    }
}

export class C_StatBar {
    current: number;
    max: number;
    calc: string; // ex: "CON * 2 + DEX"

    constructor(current: number, max: number, calc: string) {
        this.current = current;
        this.max = max;
        this.calc = calc;
    }
}

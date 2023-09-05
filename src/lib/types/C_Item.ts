export class C_Item {
    name: string;
    description: string;
    pinned: boolean;
    isEquipped?: boolean;
    modifierAtributes?: Array<string>;
    modifierProficiencys?: Array<string>;
    diceRoll?: number;
    // for weapons
    hitDice?: string;
    damageDice?: string;
    constructor(
        name: string,
        description: string,
        pinned: boolean,
        isEquipped: boolean,
        modifierAtributes: Array<string>,
        modifierProficiencys: Array<string>,
        diceRoll: number,
        hitDice: string,
        damageDice: string
    ) {
        this.name = name;
        this.description = description;
        this.pinned = pinned;
        this.isEquipped = isEquipped;
        this.modifierAtributes = modifierAtributes;
        this.modifierProficiencys = modifierProficiencys;
        this.diceRoll = diceRoll;
        this.hitDice = hitDice;
        this.damageDice = damageDice;
    }
}

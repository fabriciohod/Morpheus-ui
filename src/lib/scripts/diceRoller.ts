import type { DiceType, RollResult } from './types';
import { RollHistory } from '../characterData';


const rollDiceSimple = (diceType: DiceType) => {
    return Math.floor(Math.random() * diceType) + 1;
};

export const RollDice = (name: string, diceType: DiceType, rollTimes: number = 1, bonus: number[] = []) => {
    const rolls: number[] = [];

    for (let i = 0; i < rollTimes; i++) {
        rolls.push(rollDiceSimple(diceType));
    }
    const bonusValue = bonus.length > 0 ? bonus.reduce((accumulator, currentValue) => accumulator + currentValue, 0) : 0;
    const bonusString = bonus.length > 0 ? bonus.join("+") : "";
    console.log(bonusString)
    const rollsBonus = rolls.reduce((total, roll) => total + roll, 0) + bonusValue;

    const res: RollResult = {
        name,
        individualRolls: rolls,
        rollSummary: `[${rolls.toString()}]${bonus.length > 0 ? ` + ${bonusString}` : ""}`,
        result: rollsBonus
    };

    RollHistory.update(u => {
        u.push(res);
        return u;
    });

    return res;
};

export const RollDiceString = (diceNotation: string) => {
    const regex = /^(\d*)?d(\d+)((\s*[+-]\s*\d+\s*)+)?$/i;
    const match = diceNotation.match(regex);

    if (!match) {
        throw new Error("Invalid dice notation format");
    }

    const [, numberOfDice, diceType, modifiers] = match;
    const numDice = numberOfDice ? parseInt(numberOfDice) : 1;
    const diceSize = parseInt(diceType);

    const rolls: number[] = [];

    for (let i = 0; i < numDice; i++) {
        rolls.push(Math.floor(Math.random() * diceSize) + 1);
    }

    const parsedModifiers = modifiers ? modifiers.match(/[+-]?\s*\d+/g) || [] : [];
    const modifierValues = parsedModifiers.map(modifier => parseInt(modifier.replace(/\s+/g, "")));
    const modifierString = parsedModifiers.join("");

    const rollsSum = rolls.reduce((total, roll) => total + roll, 0);
    const modifierSum = modifierValues.reduce((total, modifier) => total + modifier, 0);
    const rollsBonus = rollsSum + modifierSum;

    const res: RollResult = {
        name: "👀",
        individualRolls: rolls,
        rollSummary: `[${rolls.toString()}]${modifierString ? `${modifierString}` : ""}`,
        result: rollsBonus,
    };

    RollHistory.update(u => {
        u.push(res);
        return u;
    });

    return res;
};
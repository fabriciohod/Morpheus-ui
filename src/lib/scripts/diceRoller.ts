import { get } from 'svelte/store';
import { db } from './stores/db';
import CharInfo from './stores/character';
import { Proficiency } from './stores/proficiencys';
import { RollHistory } from './stores/roll';
import { FindStat } from './stores/stats';
import type { E_DiceType, T_RollResult, T_WeaponRollResult } from './types/dice';
import type { T_Weapon } from './types/items';


function rollDiceSimple(diceType: E_DiceType) {
    return Math.ceil(Math.random() * diceType) + 1;
}

export const RollDice = (name: string, diceType: E_DiceType, rollTimes: number = 1, bonus: number[] = [], resultToHistory: boolean = true) => {
    const rolls: number[] = [];

    for (let i = 0; i < rollTimes; i++) {
        rolls.push(rollDiceSimple(diceType));
    }

    const bonusValue = bonus.length > 0 ? bonus.reduce((accumulator, currentValue) => accumulator + currentValue, 0) : 0;
    const bonusString = bonus.length > 0 ? bonus.join("+") : "";
    const rollsBonus = rolls.reduce((total, roll) => total + roll, 0) + bonusValue;

    const res: T_RollResult = {
        name,
        individualRolls: rolls,
        rollSummary: `[${rolls.toString()}]${bonus.length > 0 ? ` + ${bonusString}` : ""}`,
        result: rollsBonus,
        isCrit: false
    };

    if (!resultToHistory) return res;

    RollHistory.update(u => {
        u.push(res);
        return u;
    });

    if (get(db) !== undefined) {
        get(db)
            .from("rolls")
            .upsert(
                { id: get(CharInfo).name, roll: res },
                { onConflict: "id" }
            )
            .then((onrejected) => {
                console.log(onrejected);
                console.log(res);
            });
    }

    return res;
};

export function WeaponDicesRoll(weapon: T_Weapon) {
    const hitBonus = [
        weapon.hitDiceBonusFlat,
        ...weapon.profBonus.map(p => Proficiency.FindAndGetValue(p)),
        ...weapon.mainStatBonus.map(b => FindStat(b).value)
    ]

    const hitRes = RollDice(weapon.name, weapon.hitDice, weapon.hitDice_rollTimes, hitBonus, false)
    const damageRes = RollDice(weapon.name, weapon.damageDice, weapon.damageDice_rollTimes, [weapon.damageBonusFlat], false)

    hitRes.individualRolls.map(v => {
        if (v == 20) {
            damageRes.result *= 2
            damageRes.isCrit = true;
            return;
        }
    })

    const res: T_WeaponRollResult = {
        hitRes,
        damageRes
    }

    RollHistory.update(u => {
        u.push(res);
        return u;
    });

    if (get(db) !== undefined) {
        get(db)
            .from("rolls")
            .upsert(
                { id: get(CharInfo).name, roll: res },
                { onConflict: "id" }
            )
            .then((onrejected) => {
                console.log(onrejected);
                console.log(res);
            });
    }

    return res
};

export function RollDiceString(diceNotation: string) {
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

    const res: T_RollResult = {
        name: "👀",
        individualRolls: rolls,
        rollSummary: `[${rolls.toString()}]${modifierString ? `${modifierString}` : ""}`,
        result: rollsBonus,
        isCrit: false
    };

    RollHistory.update(u => {
        u.push(res);
        return u;
    });

    if (get(db) !== undefined) {
        get(db)
            .from("rolls")
            .upsert(
                { id: get(CharInfo).name, roll: res },
                { onConflict: "id" }
            )
            .then((onrejected) => {
                console.log(onrejected);
                console.log(res);
            });
    }

    return res;
};

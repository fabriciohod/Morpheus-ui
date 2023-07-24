import { writable } from "svelte/store";

export type StatBarType = {
    maxValue: number;
    currentValue: number;
};

const defaultValue: StatBarType = {
    maxValue: 0,
    currentValue: 0
}

export const HpBar = writable<StatBarType>({ ...defaultValue });
export const ApBar = writable<StatBarType>({ ...defaultValue });
<script lang="ts">
    import {
        GetValueProficiency,
        MainStats,
        MainProficiencys,
    } from "$lib/characterData";
    import { RollDice } from "$lib/scripts/diceRoller";
    import { toastStore } from "@skeletonlabs/skeleton";
    import type { ToastSettings } from "@skeletonlabs/skeleton";
    import {
        UseStat,
        type RollResult,
        DiceType,
        type Proficiency,
        TrainingLevel,
    } from "$lib/scripts/types";

    export let data: Proficiency;

    const rollTest = () => {
        let t: ToastSettings;
        let res: RollResult;

        data.value = GetValueProficiency(data);

        res = RollDice(data.name, DiceType.D20, 1, [data.value, data.bonus]);

        t = {
            message: `${res.rollSummary} = ${res.result}`,
        };

        toastStore.trigger(t);
    };

    MainStats.subscribe((_) => (data.value = GetValueProficiency(data)));
</script>

<div
    class="flex"
>
    <div class="flex items-center relative">
        {#if data.value > 0}
            <p
                class={`absolute ${
                    data.value >= 100 ? "-translate-x-12" : "-translate-x-10"
                }`}
            >
                <span class="mr-1">+</span>{data.value}
            </p>
        {/if}
        <input
            class="checkbox bg-surface-700 m-auto mr-4"
            type="checkbox"
            bind:checked={data.upgraded}
            on:change={() =>
                MainProficiencys.update((arr) => {
                    data.value = GetValueProficiency(data);
                    return arr;
                })}
        />
    </div>
    <select
        class="select variant-form-material w-32 h-[2.25rem] translate-y-[0.2rem]"
        bind:value={data.training}
        on:change={() =>
            MainProficiencys.update((arr) => {
                data.value = GetValueProficiency(data);
                return arr;
            })}
    >
        <option value={0}>{TrainingLevel[0]}</option>
        <option value={1}>{TrainingLevel[1]}</option>
    </select>
    <select
        class="select variant-form-material w-20 h-[2.25rem] mx-2 translate-y-[0.2rem]"
        bind:value={data.selectedIndex}
        on:change={() =>
            MainProficiencys.update((arr) => {
                data.value = GetValueProficiency(data);
                return arr;
            })}
    >
        {#each data.use as item, i}
            <option value={i}>{UseStat[item]}</option>
        {/each}
    </select>
    <button
        class="pt-4 text-justify h-fit w-44 cursor-pointer hover:text-warning-600 hover:underline"
        on:click={(e) => rollTest()}
    >
        {data.name}
    </button>
    <input
        class="input variant-form-material w-12"
        type="number"
        placeholder="0"
        min="0"
        bind:value={data.bonus}
    />
</div>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>

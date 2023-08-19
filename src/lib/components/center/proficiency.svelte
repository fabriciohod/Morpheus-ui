<script lang="ts">
    import { RollDice } from "$lib/scripts/diceRoller";
    import { Proficiency } from "$lib/scripts/stores/proficiencys";
    import { FindStat, storeBaseState } from "$lib/scripts/stores/stats";
    import { E_DiceType, type T_RollResult } from "$lib/scripts/types/dice";
    import {
        E_TrainingLevel,
        type T_Proficiency,
    } from "$lib/scripts/types/proficiencys";
    import { E_Stat } from "$lib/scripts/types/stat";
    import { toastStore } from "@skeletonlabs/skeleton";
    import type { ToastSettings } from "@skeletonlabs/skeleton";

    export let data: T_Proficiency;

    const rollTest = () => {
        let t: ToastSettings;
        let res: T_RollResult;

        data.value = Proficiency.GetValueProficiency(data);
        
        res = RollDice(data.name, E_DiceType.D20, 1, [data.value, data.bonus, FindStat(data.use[data.selectedIndex]).bonus]);
        console.log(res)

        t = {
            message: `${res.rollSummary} = ${res.result}`,
        };

        toastStore.trigger(t);
    };

    storeBaseState.subscribe(
        (_) => (data.value = Proficiency.GetValueProficiency(data))
    );
</script>

<div class="flex">
    <div class="flex items-center relative">
        {#if data.value > 0}
            <p
                class={`absolute text-left ${
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
                Proficiency.store.update((arr) => {
                    data.value = Proficiency.GetValueProficiency(data);
                    return arr;
                })}
        />
    </div>
    <select
        class="select variant-form-material w-32 translate-y-[0.2rem]"
        bind:value={data.training}
        on:change={() =>
            Proficiency.store.update((arr) => {
                data.value = Proficiency.GetValueProficiency(data);
                return arr;
            })}
    >
        <option value={0}>{E_TrainingLevel[0]}</option>
        <option value={1}>{E_TrainingLevel[1]}</option>
    </select>
    <select
        class="select variant-form-material w-20 mx-2 translate-y-[0.2rem]"
        bind:value={data.selectedIndex}
        on:change={() =>
            Proficiency.store.update((arr) => {
                data.value = Proficiency.GetValueProficiency(data);
                return arr;
            })}
    >
        {#each data.use as item, i}
            <option value={i}>{E_Stat[item]}</option>
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

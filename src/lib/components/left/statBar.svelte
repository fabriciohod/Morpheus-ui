<script lang="ts">
    import { ProgressBar } from "@skeletonlabs/skeleton";
    import {
        GetValueProficiency,
        MainStats,
        MainProficiencys,
    } from "$lib/characterData";
    import Icon from "@iconify/svelte";
    import { taphold } from "$lib/scripts/taphold";
    import type { RuntimeBar } from "$lib/scripts/types";

    export let color: string = "bg-error-500";
    export let data: RuntimeBar;
    export let baseStatIndex: number;
    export let proficiencyIndex: number;
    export let multipliers = 1;
    export let name: string;
    export let animateWhenCloseToEnd: boolean = false;

    const incresse = () => {
        if (data.currentValue >= data.maxValue)
            return (data.currentValue = data.maxValue);

        return (data.currentValue += 1);
    };

    const decresce = () => {
        if (data.currentValue <= 0) return (data.currentValue = 0);

        return (data.currentValue -= 1);
    };

    function calculateResult() {
        try {
            const res = eval(data.currentValue.toString());
            data.currentValue = Number.parseInt(res) < 0 ? 0 : res;
        } catch (error) {
            console.log(error);
        }
    }
    const calc = () => {
        data.maxValue =
            ($MainStats[baseStatIndex].value +
                GetValueProficiency($MainProficiencys[proficiencyIndex])) *
            multipliers;
    };

    MainStats.subscribe((_) => calc());
    MainProficiencys.subscribe((_) => calc());
</script>

<div class="relative">
    <div class="flex absolute translate-x-6 scale-[0.78] z-[1]">
        <span class="absolute translate-y-[0.45rem] text-lg">{name}</span>
        <button
            type="button"
            use:taphold={100}
            on:taphold={decresce}
            class="btn-icon variant-filled -translate-x-14 -translate-y-[0.15rem]"
        >
            <Icon icon="fe:arrow-up" rotate={3} />
        </button>
        <div class="w-24 flex justify-between -translate-x-4 m-auto mx-4">
            <input
                type="text"
                bind:value={data.currentValue}
                min="0"
                on:blur={(e) => calculateResult()}
                class="bg-transparent w-16 h-5 text-right p-0 m-auto outline-none border-transparent"
            />
            <span class="mr-1">|</span>
            <span>{data.maxValue}</span>
        </div>
        <button
            type="button"
            use:taphold={100}
            on:taphold={incresse}
            class="btn-icon variant-filled translate-x-[4.1rem] -translate-y-[0.15rem]"
        >
            <Icon icon="fe:arrow-up" rotate={1} />
        </button>
    </div>
    {#if animateWhenCloseToEnd ? data.currentValue <= data.maxValue * 0.1 : false}
        <ProgressBar
            meter={color}
            track="bg-surface-800/60"
            class="h-[2.5rem] z-[-1]"
            value={-1}
            max={data.maxValue}
        />
    {:else}
        <ProgressBar
            meter={color}
            track="bg-surface-800/60"
            class="h-[2.5rem]"
            value={data.currentValue}
            max={data.maxValue}
        />
    {/if}
</div>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>

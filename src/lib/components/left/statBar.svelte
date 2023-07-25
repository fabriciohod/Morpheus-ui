<script lang="ts">
    import { ProgressBar } from "@skeletonlabs/skeleton";
    import Icon from "@iconify/svelte";
    import { taphold } from "$lib/scripts/taphold";
    import { createEventDispatcher } from "svelte";
    import type { StatBarType } from "$lib/scripts/stores/hpAndAp";
    import { storeBaseState } from "$lib/scripts/stores/stats";
    import { get } from "svelte/store";
    import { Proficiency } from "$lib/scripts/stores/proficiencys";
    const dispatch = createEventDispatcher();

    export let color: string = "bg-error-500";
    export let rounded: string = "rounded-xl";
    export let data: StatBarType;
    export let baseStatIndex: number;
    export let proficiencyIndex: number;
    export let multipliers = 1;
    export let name: string;
    export let showBtns: boolean = true;
    export let animateWhenCloseToEnd: boolean = false;

    function incresse() {
        if (data.currentValue >= data.maxValue)
            return (data.currentValue = data.maxValue);

        return (data.currentValue += 1);
    }

    function decresce() {
        if (data.currentValue <= 0) return (data.currentValue = 0);

        return (data.currentValue -= 1);
    }

    function calculateResult() {
        try {
            const res = eval(data.currentValue.toString());
            data.currentValue = Number.parseInt(res) < 0 ? 0 : res;
        } catch (error) {
            console.log(error);
        }
    }
    function calc() {
        data.maxValue =
            ($storeBaseState[baseStatIndex].value +
                Proficiency.GetValueProficiency(
                    get(Proficiency.store)[proficiencyIndex]
                )) *
            multipliers;
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            event.target.blur();
        }
    }

    storeBaseState.subscribe((_) => calc());
    Proficiency.store.subscribe((_) => calc());
</script>

<div class="relative">
    <div class="flex absolute w-full scale-[0.78] z-[1]">
        <div class="flex justify-evenly w-full items-center">
            <button
                type="button"
                use:taphold={100}
                on:mouseup={() => dispatch("stopChange")}
                on:taphold={decresce}
                class={`btn-icon variant-filled ${showBtns ? "" : "opacity-0"}`}
            >
                <Icon icon="fe:arrow-up" rotate={3} />
            </button>
            <div class="w-24 flex mx-[5.4rem] max-lg:mx-16 items-center">
                <span class="text-lg">{name}</span>
                <input
                    type="text"
                    bind:value={data.currentValue}
                    min="0"
                    on:blur={(e) => calculateResult()}
                    on:keypress={handleKeyDown}
                    on:focusout={() => dispatch("stopChange")}
                    class="bg-transparent w-16 h-5 text-right outline-none border-transparent"
                />
                <span class="mr-1">|</span>
                <span>{data.maxValue}</span>
            </div>
            <button
                type="button"
                use:taphold={100}
                on:mouseup={() => dispatch("stopChange")}
                on:taphold={incresse}
                class={`btn-icon variant-filled${showBtns ? "" : "opacity-0"}`}
            >
                <Icon icon="fe:arrow-up" rotate={1} />
            </button>
        </div>
    </div>
    {#if animateWhenCloseToEnd ? data.currentValue <= data.maxValue * 0.1 : false}
        <ProgressBar
            meter={color}
            track="bg-surface-800/60"
            class="h-[2.5rem] z-[-1]"
            {rounded}
            value={-1}
            max={data.maxValue}
        />
    {:else}
        <ProgressBar
            meter={color}
            track="bg-surface-800/60"
            class="h-[2.5rem]"
            {rounded}
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

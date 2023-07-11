<script lang="ts">
    import Icon from "@iconify/svelte";
    import { DiceType, type RollResult, type Stat } from "$lib/scripts/types";

    import { RollDice } from "$lib/scripts/diceRoller";
    import { toastStore } from "@skeletonlabs/skeleton";
    import type { ToastSettings } from "@skeletonlabs/skeleton";

    export let data: Stat;

    const rollTest = () => {
        const res: RollResult = RollDice(data.name, DiceType.D20, 1, [
            data.value,
            data.bonus,
        ]);

        const t: ToastSettings = {
            message: `${res.rollSummary} = ${res.result}`,
        };

        toastStore.trigger(t);
    };
</script>

<div class="flex justify-start my-1 items-center">
    <button
        type="button"
        on:click={(e) => rollTest()}
        class="btn-icon variant-filled"
    >
        <Icon icon="fa-solid:dice-d20" />
    </button>

    <span class="mx-4 w-[6.25rem]">{data.name}</span>
    <div class="flex">
        <input
            class="input variant-form-material w-[3.3rem]"
            type="number"
            min="0"
            bind:value={data.value}
        />
        <input
            class="input ml-8 variant-form-material w-[3.3rem]"
            type="number"
            min="0"
            bind:value={data.bonus}
        />
    </div>
</div>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>

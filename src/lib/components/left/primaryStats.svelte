<script lang="ts">
    import { RollDice } from "$lib/scripts/diceRoller";
    import { E_DiceType, type T_RollResult } from "$lib/scripts/types/dice";
    import type { T_Stat } from "$lib/scripts/types/stat";
    import type { ToastSettings } from "@skeletonlabs/skeleton";
    import { toastStore } from "@skeletonlabs/skeleton";

    export let data: T_Stat;

    const rollTest = () => {
        const res: T_RollResult = RollDice(data.name, E_DiceType.D20, 1, [
            data.value,
            data.bonus,
        ]);

        const t: ToastSettings = {
            message: `${res.rollSummary} = ${res.result}`,
        };

        toastStore.trigger(t);
    };
</script>

<div class="flex items-center justify-between my-1 max-lg:mx-3">
    <button
        on:click={(e) => rollTest()}
        class="pt-4 text-justify h-fit w-44 cursor-pointer hover:text-warning-600 hover:underline"
        >{data.name}</button
    >
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
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>

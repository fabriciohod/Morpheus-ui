<script lang="ts">
    import Icon from "@iconify/svelte";
    import { createEventDispatcher } from "svelte";
    import { DiceType, type RollResult, type Stat } from "$lib/scripts/types";

    import { RollDice } from "$lib/scripts/diceRoller";
    import { toastStore } from "@skeletonlabs/skeleton";
    import type { ToastSettings } from "@skeletonlabs/skeleton";

    const dispatcher = createEventDispatcher();

    export let data: Stat;

    const rollTest = () => {
        const res: RollResult = RollDice(data.name, DiceType.D20, 1);

        const t: ToastSettings = {
            message: `${res.rollSummary} = ${res.result}`,
        };

        toastStore.trigger(t);
    };
</script>

<div class="grid grid-cols-[20%_40%_30%] gap-x-2 my-1 items-center">
    <button
        type="button"
        on:click={(e) => rollTest()}
        class="btn-icon variant-filled"
    >
        <Icon icon="fa-solid:dice-d20" />
    </button>

    <span class="mr-4">{data.name}</span>
    <input
        class="input variant-form-material w-20"
        type="number"
        min="0"
        bind:value={data.value}
    />
</div>

<script lang="ts">
    import { RollDice } from "$lib/scripts/diceRoller";
    import Icon from "@iconify/svelte";
    import {
        AccordionItem,
        toastStore,
        type ToastSettings,
        modalStore,
        type ModalSettings,
    } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";
    import BookMark from "../bookMark.svelte";
    import { BaseStats } from "$lib/scripts/stores/stats";
    import { Proficiency } from "$lib/scripts/stores/proficiencys";
    import type { T_ItemWithRoll } from "$lib/scripts/types/items";
    import { E_Stat } from "$lib/scripts/types/stat";
    import { E_Proficiencys } from "$lib/scripts/types/proficiencys";

    export let data: T_ItemWithRoll;
    export let canBeRemove: boolean = true;
    export let canBeEditable: boolean = true;

    const modal: ModalSettings = {
        type: "component",
        component: "withRollItemEdit",
        meta: { info: data },
    };
    const roll = () => {
        const baseValue: number[] = data.baseStat.map((v) => {
            const value = BaseStats.FindStat(v).value;
            const bonus = BaseStats.FindStat(v).bonus;

            return value + bonus;
        });

        const proficiencysValue = data.proficiencys.map((v) => {
            const value = Proficiency.FindAndGetValue(v);

            return value;
        });

        const res = RollDice(data.name, data.diceToRoll, data.rollTimes, [
            ...baseValue,
            ...proficiencysValue,
        ]);

        const t: ToastSettings = {
            message: `${res.rollSummary} = ${res.result}`,
        };

        toastStore.trigger(t);
    };

    const dispatcher = createEventDispatcher();

    const remove = () => {
        dispatcher("RemoveClicked");
    };

    const calcInfo =
        `${data.rollTimes}xD${data.diceToRoll} + ` +
        data.baseStat.map((v) => E_Stat[v]).join(" + ") +
        " + " +
        data.proficiencys.map((v) => E_Proficiencys[v]).join(" + ");
</script>

<div class="relative">
    <BookMark bind:isPinned={data.pinned} />
    <button
        type="button"
        on:click={(e) => roll()}
        class="btn-icon variant-filled absolute w-8 translate-y-1 translate-x-[34rem]"
    >
        <Icon icon="fa-solid:dice-d20" />
    </button>
    <AccordionItem>
        <svelte:fragment slot="lead">
            <span class="ml-2">
                {data.name}
            </span>
        </svelte:fragment>
        <svelte:fragment slot="summary">{" "}</svelte:fragment>
        <svelte:fragment slot="content">
            <p class="text-xs opacity-70 mb-1">Rolagem: {calcInfo}</p>
            {data.description}
            <div class="flex flex-row-reverse justify-between mt-4">
                {#if canBeRemove}
                    <button
                        class="btn variant-ghost-error text-xs tracking-widest uppercase"
                        on:click={(e) => remove()}
                    >
                        remover
                    </button>
                {/if}
                {#if canBeEditable}
                    <button
                        class="btn variant-ghost-success text-xs tracking-widest uppercase"
                        on:click={() => modalStore.trigger(modal)}
                    >
                        Editar
                    </button>
                {/if}
            </div>
        </svelte:fragment>
    </AccordionItem>
</div>

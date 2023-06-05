<script lang="ts">
    import {
        GetBaseStat,
        GetProficiency,
        GetValueProficiency,
    } from "$lib/characterData";
    import { RollDice } from "$lib/scripts/diceRoller";
    import {
        ProficiencysEnum,
        type ItemWithRoll,
        UseStat,
        type Inventory,
    } from "$lib/scripts/types";
    import Icon from "@iconify/svelte";
    import {
        AccordionItem,
        toastStore,
        type ToastSettings,
    } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";
    import BookMark from "../bookMark.svelte";

    export let data: ItemWithRoll;
    export let canBeRemove: boolean = true;
    export let pinnedList: Inventory;

    const roll = () => {
        const baseValue: number[] = data.baseStat.map((v) => {
            const value = GetBaseStat(v).value;
            const bonus = GetBaseStat(v).bonus;

            return value + bonus;
        });

        const proficiencysValue = data.proficiencys.map((v) => {
            const prof = GetProficiency(v);
            const value = GetValueProficiency(prof);

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
        data.baseStat.map((v) => UseStat[v]).join(" + ") +
        " + " +
        data.proficiencys.map((v) => ProficiencysEnum[v]).join(" + ");
</script>

<div class="relative">
    <BookMark
        bind:isPinned={data.pinned}
        on:PinClicked={(e) => {
            switch (e.detail) {
                case true:
                    pinnedList.push({ ...data });
                    break;
                case true:
                    pinnedList.splice(pinnedList.indexOf({ ...data }), 1);
                    break;
            }
        }}
    />
    <button
        type="button"
        on:click={(e) => roll()}
        class="btn-icon variant-filled absolute w-8 translate-y-1 translate-x-[28rem] max-2xl:translate-x-[24rem]"
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
            {#if canBeRemove}
                <div class="flex justify-end mt-4">
                    <button
                        class="btn variant-ghost-error text-xs tracking-widest uppercase"
                        on:click={(e) => remove()}
                    >
                        remover
                    </button>
                </div>
            {/if}
        </svelte:fragment>
    </AccordionItem>
</div>

<script lang="ts">
    import { MainDefensiveStats } from "$lib/characterData";
    import {
        StatModifiers,
        type EquipmentItem,
        type Inventory,
    } from "$lib/scripts/types";
    import { AccordionItem } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";
    import BookMark from "../bookMark.svelte";

    export let data: EquipmentItem;
    export let canBeRemove = true;

    const applyModifier = () => {
        data.isEquip = !data.isEquip;

        switch (data.modifyStat) {
            case StatModifiers.Defesa:
                if (data.isEquip)
                    $MainDefensiveStats.DEF_equipment += data.value;
                else $MainDefensiveStats.DEF_equipment -= data.value;
                break;
            case StatModifiers.Esquiva:
                if (data.isEquip)
                    $MainDefensiveStats.DOGE_equipment += data.value;
                else $MainDefensiveStats.DOGE_equipment -= data.value;
                break;
        }
    };

    const dispatcher = createEventDispatcher();
    const remove = () => {
        if (data.isEquip) {
            switch (data.modifyStat) {
                case StatModifiers.Defesa:
                    $MainDefensiveStats.DEF_equipment -= data.value;
                    break;
                case StatModifiers.Esquiva:
                    $MainDefensiveStats.DOGE_equipment -= data.value;
                    break;
            }
        }

        dispatcher("RemoveClicked");
    };
</script>

<div class="items-center bg-surface-800 rounded-md relative">
    <input
        checked={data.isEquip}
        class="checkbox absolute translate-y-2 translate-x-[28rem]"
        on:click={(e) => {
            applyModifier();
        }}
        type="checkbox"
    />
    <BookMark bind:isPinned={data.pinned} />
    <AccordionItem>
        <svelte:fragment slot="lead">
            <span class="ml-2">
                {data.name}
            </span>
        </svelte:fragment>
        <svelte:fragment slot="summary">
            {StatModifiers[data.modifyStat]}: +{data.value}
        </svelte:fragment>
        <svelte:fragment slot="content">
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

<script lang="ts">
    import { AccordionItem, modalStore, type ModalSettings } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";
    import BookMark from "../bookMark.svelte";
    import { storeDefensiveStats } from "$lib/scripts/stores/stats";
    import { E_StatModifiers, type T_EquipmentItem } from "$lib/scripts/types/items";

    export let data: T_EquipmentItem;
    export let canBeRemove = true;
    export let canBeEditable = true;

    const modal: ModalSettings = {
        type: "component",
        component: "equipItemEdit",
        meta: { info: data },
    };

    const applyModifier = () => {
        data.isEquip = !data.isEquip;

        switch (data.modifyStat) {
            case E_StatModifiers.Defesa:
                if (data.isEquip)
                    $storeDefensiveStats.DEF_equipment += data.value;
                else $storeDefensiveStats.DEF_equipment -= data.value;
                break;
            case E_StatModifiers.Esquiva:
                if (data.isEquip)
                    $storeDefensiveStats.DOGE_equipment += data.value;
                else $storeDefensiveStats.DOGE_equipment -= data.value;
                break;
        }
    };

    const dispatcher = createEventDispatcher();
    const remove = () => {
        if (data.isEquip) {
            switch (data.modifyStat) {
                case E_StatModifiers.Defesa:
                    $storeDefensiveStats.DEF_equipment -= data.value;
                    break;
                case E_StatModifiers.Esquiva:
                    $storeDefensiveStats.DOGE_equipment -= data.value;
                    break;
            }
        }

        dispatcher("RemoveClicked");
    };
</script>

<div class="items-center bg-surface-800 rounded-md relative">
    <input
        checked={data.isEquip}
        class="checkbox absolute translate-y-2 translate-x-[34.4rem]"
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
            {E_StatModifiers[data.modifyStat]}: +{data.value}
        </svelte:fragment>
        <svelte:fragment slot="content">
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

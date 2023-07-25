<script lang="ts">
    import {
        Tab,
        TabGroup,
        toastStore,
        type ToastSettings,
    } from "@skeletonlabs/skeleton";
    import ItemWithRollCreator from "../itemWithRollCreator.svelte";
    import SimpleItemCreator from "../simpleItemCreator.svelte";
    import EquippableItemCreator from "./creation/equippableItemCreator.svelte";
    import WeaponCreator from "./creation/WeaponCreator.svelte";
    import { Bag } from "$lib/scripts/stores/storege";
    import type { T_SimpleItem, T_EquipmentItem, T_ItemWithRoll } from "$lib/scripts/types/items";
    let tabSet: number = 0;

    const success: ToastSettings = {
        message: "Adicionada com sucesso",
        background: "variant-filled-success",
    };

    const addToInventory = (
        item: T_SimpleItem | T_EquipmentItem | T_ItemWithRoll
    ) => {
        toastStore.trigger(success);
        $Bag.push({...item});
    };
</script>

<TabGroup justify="justify-center" active="bg-warning-700/70" regionList="h-9">
    <Tab bind:group={tabSet} class="scale-90" name="tab1" value={0}>Simples</Tab
    >
    <Tab bind:group={tabSet} class="scale-90" name="tab2" value={1}
        >Equipável</Tab
    >
    <Tab bind:group={tabSet} class="scale-90" name="tab3" value={2}
        >Com rolagem</Tab
    >
    <Tab bind:group={tabSet} class="scale-90" name="tab3" value={3}
        >Arma</Tab
    >

    <svelte:fragment slot="panel">
        {#if tabSet === 0}
            <SimpleItemCreator
                bind:inventory={$Bag}
                on:itemCreated={(i) => addToInventory({ ...i.detail })}
            />
        {:else if tabSet === 1}
            <EquippableItemCreator
                bind:inventory={$Bag}
                on:itemCreated={(i) => addToInventory({ ...i.detail })}
            />
        {:else if tabSet === 2}
            <ItemWithRollCreator
                bind:inventory={$Bag}
                on:itemCreated={(i) => addToInventory({ ...i.detail })}
            />
        {:else if tabSet === 3}
            <WeaponCreator
                bind:inventory={$Bag}
                on:itemCreated={(i) => addToInventory({ ...i.detail })}
            />
        {/if}
    </svelte:fragment>
</TabGroup>

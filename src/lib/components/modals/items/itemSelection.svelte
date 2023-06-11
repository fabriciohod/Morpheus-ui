<script lang="ts">
    import { Bag } from "$lib/characterData";
    import { DefItemsList } from "$lib/scripts/items/items";
    import { StatModifiers, type EquipmentItem } from "$lib/scripts/types";
    import {
        Accordion,
        AccordionItem,
        Tab,
        TabGroup,
        Toast,
        toastStore,
        type ToastSettings,
    } from "@skeletonlabs/skeleton";
    import CreateItem from "./createItem.svelte";
    import AddItem from "../addItem.svelte";
    import WeaponsSection from "./weaponsSection.svelte";

    let tabSet: number = 0;

    const success: ToastSettings = {
        message: "Adicionada com sucesso",
        background: "variant-filled-success",
    };

    const error: ToastSettings = {
        message: "ja existente",
        background: "variant-filled-error",
    };
    const addToInventory = (item: EquipmentItem) => {
        if ($Bag.find((i) => i.name === item.name)) {
            toastStore.trigger(error);
            return;
        }

        toastStore.trigger(success);
        $Bag.push({...item});
    };
</script>

<div class="bg-surface-600 w-[50rem] min-h-[40rem] h-fit rounded-2xl px-4 py-2">
    <TabGroup active="bg-warning-700/70">
        <Tab bind:group={tabSet} name="tab1" value={0}>Defensivos</Tab>
        <Tab bind:group={tabSet} name="tab2" value={1}>Armas</Tab>
        <Tab bind:group={tabSet} name="tab3" value={2}>Utilitários</Tab>
        <Tab bind:group={tabSet} name="tab3" value={3}>Adicionar</Tab>
        <svelte:fragment slot="panel">
            {#if tabSet === 0}
                <Accordion
                    regionControl="bg-surface-700"
                    regionPanel="bg-surface-700 space-y-4"
                >
                    {#each DefItemsList as item}
                        <AddItem
                            data={item}
                            summary={`${StatModifiers[item.modifyStat]}: +${
                                item.value
                            }`}
                            on:addBtnClicked={(e) => addToInventory(e.detail)}
                        />
                    {/each}
                </Accordion>
            {:else if tabSet === 1}
                <WeaponsSection/>
            {:else if tabSet === 2}
                (Ainda não tem items)
            {:else if tabSet === 3}
                <CreateItem />
            {/if}
        </svelte:fragment>
    </TabGroup>
</div>
<Toast />

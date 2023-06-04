<script lang="ts">
    import {
        Accordion,
        modalStore,
        type ModalSettings,
        TabGroup,
        Tab,
    } from "@skeletonlabs/skeleton";
    import EquipItem from "./items/equipItem.svelte";
    import { Bag, PinnedItems } from "$lib/characterData";
    import SimpleItem from "./items/simpleItem.svelte";
    import WithRollItem from "./items/withRollItem.svelte";

    let unique = {};
    let tabSet: number = 0;

    const modal: ModalSettings = {
        type: "component",
        component: "modalComponentTwo",
    };

    const restart = () => (unique = {});

    modalStore.subscribe((_) => restart());

    const removeItem = (index: number) => {
        $Bag.splice(index, 1);
        restart();
    };
</script>

<div>
    <div class="flex justify-end my-2">
        <button
            class=" mb-2 btn variant-filled-success text-xs"
            on:click={(e) => modalStore.trigger(modal)}>Adicionar</button
        >
    </div>
    <TabGroup active="bg-warning-700/70">
        <Tab bind:group={tabSet} name="tab1" value={1}>Pinados</Tab>
        <Tab bind:group={tabSet} name="tab2" value={0}>Ver tudo</Tab>
        <svelte:fragment slot="panel">
            {#if tabSet === 1}
                <Accordion
                    regionControl="bg-surface-700"
                    regionPanel="bg-surface-700 space-y-4"
                >
                    {#each $PinnedItems as item, i}
                        {#if "hitDice" in item}
                            <WithRollItem
                                pinnedList={$PinnedItems}
                                bind:data={item}
                                canBeRemove={false}
                            />
                        {:else if "isEquip" in item}
                            <EquipItem
                                pinnedList={$PinnedItems}
                                canBeRemove={false}
                                bind:data={item}
                            />
                        {:else}
                            <SimpleItem
                                pinnedList={$PinnedItems}
                                bind:data={item}
                                canBeRemove={false}
                            />
                        {/if}
                    {/each}
                </Accordion>
            {:else if tabSet === 0}
                {#key unique}
                    <Accordion
                        regionControl="bg-surface-700"
                        regionPanel="bg-surface-700 space-y-4"
                    >
                        {#each $Bag as item, i}
                            {#if "hitDice" in item}
                                <WithRollItem
                                    pinnedList={$PinnedItems}
                                    bind:data={item}
                                    on:RemoveClicked={() => {
                                        removeItem(i);
                                        item.pinned = false;
                                    }}
                                />
                            {:else if "isEquip" in item}
                                <EquipItem
                                    pinnedList={$PinnedItems}
                                    bind:data={item}
                                    on:RemoveClicked={() => {
                                        removeItem(i);
                                        item.pinned = false;
                                    }}
                                />
                            {:else}
                                <SimpleItem
                                    pinnedList={$PinnedItems}
                                    bind:data={item}
                                    on:RemoveClicked={() => {
                                        removeItem(i);
                                        item.pinned = false;
                                    }}
                                />
                            {/if}
                        {/each}
                    </Accordion>
                {/key}
            {/if}
        </svelte:fragment>
    </TabGroup>
</div>

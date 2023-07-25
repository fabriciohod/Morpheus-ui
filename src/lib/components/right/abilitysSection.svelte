<script lang="ts">
    import {
        Accordion,
        modalStore,
        type ModalSettings,
        TabGroup,
        Tab,
    } from "@skeletonlabs/skeleton";
    import WithRollItem from "./items/withRollItem.svelte";
    import SimpleItem from "./items/simpleItem.svelte";
    import { Abilitys, RaceAbilitys } from "$lib/scripts/stores/storege";

    let unique = {};
    let tabSet: number = 0;
    const modal: ModalSettings = {
        type: "component",
        component: "modalComponentOne",
    };

    const restart = () => (unique = {});

    modalStore.subscribe((_) => restart());

    const removeItem = (index: number) => {
        $Abilitys.splice(index, 1);
        restart();
    };
</script>

<div>
    <div class="flex justify-end">
        <button
            type="button"
            on:click={(e) => modalStore.trigger(modal)}
            class=" mb-2 btn variant-filled-success text-xs"
        >
            Adicionar
        </button>
    </div>
    {#key unique}
        <TabGroup active="bg-warning-700/70">
            <Tab bind:group={tabSet} name="tab1" value={1}>Pinados</Tab>
            <Tab bind:group={tabSet} name="tab2" value={0}>Ver tudo</Tab>
            <svelte:fragment slot="panel">
                {#if tabSet === 1}
                    <Accordion
                        regionControl="bg-surface-700"
                        regionPanel="bg-surface-700 space-y-4"
                    >
                        {#each $RaceAbilitys as ability, i}
                            {#if ability.pinned}
                                <SimpleItem
                                    canBeRemove={false}
                                    bind:data={ability}
                                />
                            {/if}
                        {/each}
                        {#each $Abilitys as ability, i}
                            {#if ability.pinned}
                                {#if "diceToRoll" in ability}
                                    <WithRollItem
                                        canBeRemove={false}
                                        bind:data={ability}
                                    />
                                {:else}
                                    <SimpleItem
                                        canBeRemove={false}
                                        bind:data={ability}
                                    />
                                {/if}
                            {/if}
                        {/each}
                    </Accordion>
                {:else if tabSet === 0}
                    <Accordion
                        regionControl="bg-surface-700"
                        regionPanel="bg-surface-700 space-y-4"
                    >
                        {#each $RaceAbilitys as ability, i}
                            <SimpleItem
                                bind:data={ability}
                                canBeRemove={false}
                            />
                        {/each}
                        {#each $Abilitys as ability, i}
                            {#if "diceToRoll" in ability}
                                <WithRollItem
                                    bind:data={ability}
                                    on:RemoveClicked={() => {
                                        removeItem(i);
                                        ability.pinned = false;
                                    }}
                                />
                            {:else}
                                <SimpleItem
                                    bind:data={ability}
                                    on:RemoveClicked={() => {
                                        removeItem(i);
                                        ability.pinned = false;
                                    }}
                                />
                            {/if}
                        {/each}
                    </Accordion>
                {/if}
            </svelte:fragment>
        </TabGroup>
    {/key}
</div>

<script>
    import { CharacterData } from "$lib/characterData";
    import { Tab, TabGroup } from "@skeletonlabs/skeleton";
    import AbilitysSection from "./right/abilitysSection.svelte";
    import Inventory from "./right/inventorySection.svelte";
    import CharBio from "./right/charBioSection.svelte";

    let tabSet = 0
</script>

<div class="mx-2 w-[39.93rem]">
    <div
        class="min-h-[44.53rem] h-fit max-lg:w-[41rem] max-lg:m-2 bg-surface-600 p-3 rounded-2xl"
    >
        <TabGroup active="bg-warning-700/70">
            <Tab bind:group={tabSet} name="tab2" value={0}>Habilidades</Tab>
            <Tab bind:group={tabSet} name="tab1" value={1}>Inventario</Tab>
            <Tab bind:group={tabSet} name="tab3" value={2}>Bio</Tab>
            <svelte:fragment slot="panel">
                {#if tabSet === 0}
                    <AbilitysSection />
                {:else if tabSet === 1}
                    <Inventory />
                {:else if tabSet === 2}
                    <CharBio bind:content={$CharacterData} />
                {/if}
            </svelte:fragment>
        </TabGroup>
    </div>
</div>

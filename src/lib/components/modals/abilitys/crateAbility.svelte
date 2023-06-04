<script lang="ts">
    import {
        Tab,
        TabGroup,
        toastStore,
        type ToastSettings,
    } from "@skeletonlabs/skeleton";
    import type { SimpleItem, ItemWithRoll } from "$lib/scripts/types";
    import { Abilitys } from "$lib/characterData";
    import SimpleItemCreator from "../simpleItemCreator.svelte";
    import ItemWithRollCreator from "../itemWithRollCreator.svelte";

    let tabSet: number = 0;
    const success: ToastSettings = {
        message: "Habilidade adicionada",
        background: "variant-filled-success",
    };

    const addAbility = (newAbility: SimpleItem | ItemWithRoll) => {

        toastStore.trigger(success);
        $Abilitys.push(newAbility);
    };
</script>

<TabGroup justify="justify-center" active="bg-warning-700/70" regionList="h-9">
    <Tab bind:group={tabSet} class="scale-90" name="tab1" value={0}>
        Simples
    </Tab>
    <Tab bind:group={tabSet} class="scale-90" name="tab2" value={1}>
        Com Rolagem
    </Tab>
    <svelte:fragment slot="panel">
        {#if tabSet === 0}
            <SimpleItemCreator
                bind:inventory={$Abilitys}
                on:itemCreated={(a) => addAbility({...a.detail})}
            />
        {:else if tabSet === 1}
            <ItemWithRollCreator
                bind:inventory={$Abilitys}
                on:itemCreated={(a) => addAbility({...a.detail})}
            />
        {/if}
    </svelte:fragment>
</TabGroup>

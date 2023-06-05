<script lang="ts">
    import {
        Accordion,
        Tab,
        TabGroup,
        toastStore,
        type ToastSettings,
    } from "@skeletonlabs/skeleton";
    import AddItem from "../addItem.svelte";
    import { explosives, fireArms, melee } from "$lib/scripts/items/weapons";
    import type { Weapon } from "$lib/scripts/types";
    import { Bag } from "$lib/characterData";

    let tabSet: number = 0;


    const success: ToastSettings = {
        message: "Adicionada com sucesso",
        background: "variant-filled-success",
    };

    const error: ToastSettings = {
        message: "ja existente",
        background: "variant-filled-error",
    };

    const addToInventory = (item: Weapon) => {
        if ($Bag.find((i) => i.name === item.name)) {
            toastStore.trigger(error);
            return;
        }
        console.log(item);
        console.log($Bag);

        toastStore.trigger(success)
        $Bag.push(item);
    };
</script>

<TabGroup active="bg-warning-700/70" justify="justify-center">
    <Tab bind:group={tabSet} class="scale-90" name="tab1" value={0}>De fogo</Tab
    >
    <Tab bind:group={tabSet} class="scale-90" name="tab2" value={1}
        >Corpo a corpo</Tab
    >
    <Tab bind:group={tabSet} class="scale-90" name="tab3" value={2}
        >Explosivos</Tab
    >
    <svelte:fragment slot="panel">
        {#if tabSet === 0}
            {#each fireArms as item}
                <Accordion
                    regionControl="bg-surface-700"
                    regionPanel="bg-surface-700 space-y-4"
                >
                    <AddItem
                        data={item}
                        on:addBtnClicked={() => addToInventory(item)}
                    >
                        <div class="text-xs opacity-70 mb-1">
                            <span
                                >Acerto: {item.hitDice_rollTimes}d{item.hitDice}</span
                            >
                            <span
                                >Dano: {item.damageDice_rollTimes}d{item.damageDice}</span
                            >
                        </div>
                    </AddItem>
                </Accordion>
            {/each}
        {:else if tabSet === 1}
            {#each melee as item}
                <Accordion
                    regionControl="bg-surface-700"
                    regionPanel="bg-surface-700 space-y-4"
                >
                    <AddItem
                        data={item}
                        on:addBtnClicked={() => addToInventory(item)}
                    >
                        <div class="text-xs opacity-70 mb-1">
                            <span
                                >Acerto: {item.hitDice_rollTimes}d{item.hitDice}</span
                            >
                            <span
                                >Dano: {item.damageDice_rollTimes}d{item.damageDice}</span
                            >
                        </div>
                    </AddItem>
                </Accordion>
            {/each}
        {:else if tabSet === 2}
            {#each explosives as item}
                <Accordion
                    regionControl="bg-surface-700"
                    regionPanel="bg-surface-700 space-y-4"
                >
                    <AddItem
                        data={item}
                        on:addBtnClicked={() => addToInventory(item)}
                    >
                        <div class="text-xs opacity-70 mb-1">
                            <span
                                >Acerto: {item.hitDice_rollTimes}d{item.hitDice}</span
                            >
                            <span
                                >Dano: {item.damageDice_rollTimes}d{item.damageDice}</span
                            >
                        </div>
                    </AddItem>
                </Accordion>
            {/each}
        {/if}
    </svelte:fragment>
</TabGroup>

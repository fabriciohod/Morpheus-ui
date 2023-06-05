<script lang="ts">
    import {
        Accordion,
        Tab,
        TabGroup,
        toastStore,
        type ToastSettings,
    } from "@skeletonlabs/skeleton";
    import { Abilitys } from "$lib/characterData";
    import AddItem from "../../addItem.svelte";
    import {
        ProficiencysEnum,
        type ItemWithRoll,
        type SimpleItem,
        UseStat,
    } from "$lib/scripts/types";

    export let name1: string;
    export let name2: string;
    export let name3: string;

    export let arr1: (SimpleItem | ItemWithRoll)[];
    export let arr2: (SimpleItem | ItemWithRoll)[];
    export let arr3: (SimpleItem | ItemWithRoll)[];

    let tabSet: number = 0;

    const success: ToastSettings = {
        message: "Habilidade adicionada",
        background: "variant-filled-success",
    };

    const error: ToastSettings = {
        message: "Habilidade ja existente",
        background: "variant-filled-error",
    };

    const addAbility = (newAbility: SimpleItem | ItemWithRoll) => {
        if ($Abilitys.find((a) => a.name.trim() === newAbility.name.trim())) {
            toastStore.trigger(error);
            return;
        }

        toastStore.trigger(success);
        $Abilitys.push({...newAbility});
    };
</script>

<TabGroup justify="justify-center" active="bg-warning-700/70" regionList="h-9">
    <Tab bind:group={tabSet} class="scale-90" name="tab1" value={0}>
        {name1}
    </Tab>
    <Tab bind:group={tabSet} class="scale-90" name="tab2" value={1}>
        {name2}
    </Tab>
    <Tab bind:group={tabSet} class="scale-90" name="tab3" value={2}>
        {name3}
    </Tab>
    <svelte:fragment slot="panel">
        {#if tabSet === 0}
            <Accordion
                regionControl="bg-surface-700"
                regionPanel="bg-surface-700 space-y-4"
            >
                {#each arr1 as ability}
                    <AddItem
                        data={ability}
                        on:addBtnClicked={(e) => addAbility(e.detail)}
                    >
                        {#if "diceToRoll" in ability}
                            <p class="text-xs opacity-70 mb-1">
                                Rolagem: {`${ability.rollTimes}xD${ability.diceToRoll} + ` +
                                    ability.baseStat
                                        .map((v) => UseStat[v])
                                        .join(" + ") +
                                    " + " +
                                    ability.proficiencys
                                        .map((v) => ProficiencysEnum[v])
                                        .join(" + ")}
                            </p>
                        {/if}
                    </AddItem>
                {/each}
            </Accordion>
        {:else if tabSet === 1}
            <Accordion
                regionControl="bg-surface-700"
                regionPanel="bg-surface-700 space-y-4"
            >
                {#each arr2 as ability}
                    <AddItem
                        data={ability}
                        on:addBtnClicked={(e) => addAbility(e.detail)}
                    >
                        {#if "diceToRoll" in ability}
                            <p class="text-xs opacity-70 mb-1">
                                Rolagem: {`${ability.rollTimes}xD${ability.diceToRoll} + ` +
                                    ability.baseStat
                                        .map((v) => UseStat[v])
                                        .join(" + ") +
                                    " + " +
                                    ability.proficiencys
                                        .map((v) => ProficiencysEnum[v])
                                        .join(" + ")}
                            </p>
                        {/if}
                    </AddItem>
                {/each}
            </Accordion>
        {:else if tabSet === 2}
            <Accordion
                regionControl="bg-surface-700"
                regionPanel="bg-surface-700 space-y-4"
            >
                {#each arr3 as ability}
                    <AddItem
                        data={ability}
                        on:addBtnClicked={(e) => addAbility(e.detail)}
                    >
                        {#if "diceToRoll" in ability}
                            <p class="text-xs opacity-70 mb-1">
                                Rolagem: {`${ability.rollTimes}xD${ability.diceToRoll} + ` +
                                    ability.baseStat
                                        .map((v) => UseStat[v])
                                        .join(" + ") +
                                    " + " +
                                    ability.proficiencys
                                        .map((v) => ProficiencysEnum[v])
                                        .join(" + ")}
                            </p>
                        {/if}
                    </AddItem>
                {/each}
            </Accordion>
        {/if}
    </svelte:fragment>
</TabGroup>

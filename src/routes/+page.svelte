<script lang="ts">
    import {
        computePosition,
        autoUpdate,
        offset,
        shift,
        flip,
        arrow,
    } from "@floating-ui/dom";
    import {
        storePopup,
        type ModalComponent,
        type ToastSettings,
        toastStore,
    } from "@skeletonlabs/skeleton";
    import { Drawer, Modal, Toast, drawerStore } from "@skeletonlabs/skeleton";
    import { AppShell, Tab, TabGroup } from "@skeletonlabs/skeleton";
    import BaseStat from "$lib/components/left/primaryStats.svelte";
    import { MainStats, CharacterData, HpBar, ApBar } from "$lib/characterData";
    import { MainProficiencys } from "$lib/characterData";
    import Prominence from "$lib/components/center/proficiency.svelte";
    import DefCalc from "$lib/components/left/defCounter.svelte";
    import DogeCalc from "$lib/components/left/dogeCounter.svelte";
    import CharacterInfo from "$lib/components/top/characterInfo.svelte";
    import CharBio from "$lib/components/right/charBioSection.svelte";
    import AbilitysSection from "$lib/components/right/abilitysSection.svelte";
    import MenuBar from "$lib/components/top/menuBar.svelte";
    import RollHistory from "$lib/components/modals/rollHistory.svelte";
    import AbilitysSelection from "$lib/components/modals/abilitys/abilitysSelection.svelte";
    import Inventory from "$lib/components/right/inventorySection.svelte";
    import ItemSelection from "$lib/components/modals/items/itemSelection.svelte";
    import StatBar from "$lib/components/left/statBar.svelte";
    import Icon from "@iconify/svelte";
    import { RollDiceString } from "$lib/scripts/diceRoller";
    import type { RollResult } from "$lib/scripts/types";
    import SimpleItemEditor from "$lib/components/modals/edit/simpleItemEditor.svelte";
    import EquippableItemEditor from "$lib/components/modals/edit/equippableItemEditor.svelte";
    import ItemWithRollEditor from "$lib/components/modals/edit/itemWithRollEditor.svelte";
    import WeaponEditor from "$lib/components/modals/edit/WeaponEditor.svelte";

    let tabSet: number = 0;
    let diceString = "";

    const modalComponentRegistry: Record<string, ModalComponent> = {
        modalComponentOne: {
            ref: AbilitysSelection,
        },
        modalComponentTwo: {
            ref: ItemSelection,
        },
        simpleItemEdit: {
            ref: SimpleItemEditor
        },
        equipItemEdit: {
            ref: EquippableItemEditor
        },
        withRollItemEdit: {
            ref:ItemWithRollEditor
        },
        weaponEdit: {
            ref:WeaponEditor
        }
    };

    const error1: ToastSettings = {
        message: "Rolagem invalida",
        background: "variant-filled-error",
    };

    const rollTest = () => {
        const regex = /^(\d*)?d(\d+)((\s*[+-]\s*\d+\s*)+)?$/i;

        if (diceString === "") {
            return;
        }

        if (!regex.test(diceString)) {
            toastStore.trigger(error1);
            return;
        }

        const res: RollResult = RollDiceString(diceString.trim());

        const t: ToastSettings = {
            message: `${res.rollSummary} = ${res.result}`,
        };

        toastStore.trigger(t);
    };
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<main class="h-screen bg-surface-800 text-white p-1">
    <AppShell>
        <svelte:fragment slot="header">
            <MenuBar />
            <div class="w-full bg-surface-600 p-3 rounded-2xl">
                <CharacterInfo />
            </div>
        </svelte:fragment>
        <svelte:fragment slot="sidebarLeft">
            <div class="h-fit w-[20rem] bg-surface-600 p-3 m-2 rounded-2xl">
                <div class="flex">
                    <button
                        type="button"
                        class="btn-icon variant-filled mr-2"
                        on:click={(e) => rollTest()}
                    >
                        <Icon icon="fa-solid:dice-d20" />
                    </button>
                    <input
                        type="text"
                        placeholder="Rolar Dados"
                        bind:value={diceString}
                        class="input variant-form-material w-[15.5rem]"
                    />
                </div>
            </div>
            <div class="h-fit bg-surface-600 p-3 m-2 rounded-2xl">
                {#each $MainStats as stat, i}
                    <BaseStat bind:data={$MainStats[i]} />
                {/each}
            </div>
            <div class="h-fit bg-surface-600 p-3 m-2 rounded-2xl">
                <div class="grid grid-row-2 gap-3">
                    <StatBar
                        name="PV"
                        bind:data={$HpBar}
                        baseStatIndex={0}
                        proficiencyIndex={9}
                        multipliers={10}
                        animateWhenCloseToEnd={true}
                    />
                    <StatBar
                        name="AP"
                        color="bg-warning-800"
                        bind:data={$ApBar}
                        baseStatIndex={3}
                        proficiencyIndex={8}
                    />
                </div>
            </div>
            <div class="h-fit bg-surface-600 p-3 m-2 rounded-2xl">
                <div class="grid grid-cols-2">
                    <DefCalc />
                    <DogeCalc />
                </div>
            </div>
        </svelte:fragment>
        <svelte:fragment slot="sidebarRight">
            <div
                class="min-h-[44.53rem] h-fit w-[34rem] max-2xl:w-[30rem] bg-surface-600 p-3 mx-2 mt-2 rounded-2xl"
            >
                <TabGroup active="bg-warning-700/70">
                    <Tab bind:group={tabSet} name="tab2" value={0}
                        >Habilidades</Tab
                    >
                    <Tab bind:group={tabSet} name="tab1" value={1}
                        >Inventario</Tab
                    >
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
        </svelte:fragment>
        <div
            class="min-h-[44.53rem] w-full max-2xl:w-fit mt-2 px-4 py-2 bg-surface-600 flex justify-center rounded-2xl"
        >
            <div class="pt-4">
                <div class="grid grid-cols-5">
                    <span class=" -translate-x-6 max-2xl:-translate-x-3 max-2xl:text-sm">Upgrade</span>
                    <span class=" -translate-x-6 max-2xl:-translate-x-4 max-2xl:text-sm">Treino</span>
                    <span class=" translate-x-0 max-2xl:-translate-x-1 max-2xl:text-sm">Dado</span>
                    <span class=" translate-x-0 max-2xl:-translate-x-3 max-2xl:text-sm">Perícia</span>
                    <span class=" translate-x-12 max-2xl:translate-x-12 max-2xl:text-sm">Bonus</span>
                </div>
                {#each $MainProficiencys as proficiency, i}
                    <Prominence bind:data={proficiency} />
                {/each}
            </div>
        </div>
    </AppShell>
    <Modal
        background="bg-surface-600"
        regionBackdrop="bg-surface-800/80"
        components={modalComponentRegistry}
    />
    <Drawer
        bgBackdrop="bg-surface-800/80"
        bgDrawer="bg-surface-600"
        width="w-96"
    >
        {#if $drawerStore.id === "roll-history"}
            <RollHistory />
        {/if}
    </Drawer>
    <Toast />
</main>
<script lang="ts">
    import { emit } from "@tauri-apps/api/event";
    import {
        computePosition,
        autoUpdate,
        offset,
        shift,
        flip,
        arrow,
    } from "@floating-ui/dom";
    import { storePopup, type ModalComponent } from "@skeletonlabs/skeleton";
    import { Drawer, Modal, Toast, drawerStore } from "@skeletonlabs/skeleton";
    import { RollHistory } from "$lib/characterData";
    import RollHistoryComp from "$lib/components/modals/rollHistory.svelte";
    import AbilitysSelection from "$lib/components/modals/abilitys/abilitysSelection.svelte";
    import ItemSelection from "$lib/components/modals/items/itemSelection.svelte";
    import SimpleItemEditor from "$lib/components/modals/edit/simpleItemEditor.svelte";
    import EquippableItemEditor from "$lib/components/modals/edit/equippableItemEditor.svelte";
    import ItemWithRollEditor from "$lib/components/modals/edit/itemWithRollEditor.svelte";
    import WeaponEditor from "$lib/components/modals/edit/WeaponEditor.svelte";
    import { getClient } from "$lib/supabaseClient";
    import ServerInfo from "$lib/components/modals/serverInfo.svelte";
    import { db } from "$lib/scripts/store";
    import LeftPanel from "$lib/components/leftPanel.svelte";
    import RightPanel from "$lib/components/rightPanel.svelte";
    import MildePanel from "$lib/components/mildePanel.svelte";
    import MenuBar from "$lib/components/top/menuBar.svelte";
    import CharacterInfo from "$lib/components/top/characterInfo.svelte";

    const modalComponentRegistry: Record<string, ModalComponent> = {
        modalComponentOne: {
            ref: AbilitysSelection,
        },
        modalComponentTwo: {
            ref: ItemSelection,
        },
        simpleItemEdit: {
            ref: SimpleItemEditor,
        },
        equipItemEdit: {
            ref: EquippableItemEditor,
        },
        withRollItemEdit: {
            ref: ItemWithRollEditor,
        },
        weaponEdit: {
            ref: WeaponEditor,
        },
        serverInfo: {
            ref: ServerInfo,
        },
    };

    $db = getClient(
        localStorage.getItem("url") as string,
        localStorage.getItem("key") as string
    );
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

    RollHistory.subscribe((v) => {
        emit("NewRoll", JSON.stringify(v));
    });
</script>

<main class="text-white p-2">
    <MenuBar />
    <CharacterInfo />
    <div class="flex flex-wrap max-lg:grid max-lg:grid-flow-row">
        <LeftPanel />
        <MildePanel />
        <RightPanel />
    </div>
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
            <RollHistoryComp />
        {/if}
    </Drawer>
    <Toast />
</main>

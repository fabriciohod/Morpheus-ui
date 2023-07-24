<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { DrawerSettings } from "@skeletonlabs/skeleton";
    import { drawerStore } from "@skeletonlabs/skeleton";
    import RaceSelector from "./raceSelector.svelte";

    import { CharacterData } from "$lib/characterData";

    const drawerSettings: DrawerSettings = {
        id: "roll-history",
        position: "right",
        rounded: "rounded-2xl",
    };
</script>

<div
    class="flex items-center justify-between h-fit mx-2 mt-1 mb-2 max-w-[100rem] bg-surface-600 rounded-md p-2"
>
    <div class="grid grid-cols-3 gap-x-12 max-lg:gap-x-1">
        <input
            class="input variant-form-material w-96 max-2xl:w-32 m-auto"
            title="Input (text)"
            type="text"
            placeholder="Nome do personagem"
            bind:value={$CharacterData.name}
        />
        <input
            class="input variant-form-material w-96 max-2xl:w-32 m-auto"
            title="Input (text)"
            type="text"
            placeholder="Classe"
            bind:value={$CharacterData.class}
        />
        <RaceSelector data={$CharacterData} />
    </div>
    <div class="justify-end mx-1">
        <button
            type="button"
            on:click={(e) => drawerStore.open(drawerSettings)}
            class="btn-icon variant-form-material m-auto"
        >
            <Icon icon="material-symbols:chat" width="25" />
        </button>
    </div>
</div>

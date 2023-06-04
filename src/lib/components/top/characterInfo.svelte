<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { DrawerSettings } from "@skeletonlabs/skeleton";
    import { drawerStore } from "@skeletonlabs/skeleton";
    import RaceSelector from "./raceSelector.svelte";

    import { CharacterData } from "$lib/characterData";
    let files: FileList;

    const drawerSettings: DrawerSettings = {
        id: "roll-history",
        position: "right",
        rounded: "rounded-2xl",
    };
</script>

<div class="flex justify-evenly">
    <input
        class="input variant-form-material w-96 m-auto"
        title="Input (text)"
        type="text"
        placeholder="Nome do personagem"
        bind:value={$CharacterData.name}
    />
    <input
        class="input variant-form-material w-96 m-auto"
        title="Input (text)"
        type="text"
        placeholder="Classe"
        bind:value={$CharacterData.class}
    />
    <RaceSelector data={$CharacterData} />
    <button
        type="button"
        on:click={(e) => drawerStore.open(drawerSettings)}
        class="btn-icon variant-form-material m-auto"
    >
        <Icon icon="material-symbols:chat" width="25" />
    </button>
</div>

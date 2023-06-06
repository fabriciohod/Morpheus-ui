<script lang="ts">
    import type { CharInfo } from "$lib/scripts/types";
    import VirtualList from "svelte-tiny-virtual-list";

    export let content: CharInfo;

    const GetData = (index: number) => {
        switch (index) {
            case 0:
                return ["Anotações", content.notes];
            case 1:
                return ["Aparência", content.appearance];
            case 2:
                return ["Personalidade", content.personality];
            case 3:
                return ["Historia", content.lore];
            case 4:
                return ["Objetivo", content.objective];
            default:
                return ["", ""];
        }
    };
</script>

<div >
    <span>Anotações</span>
    <textarea
        class="textarea variant-form-material resize-none"
        rows="4"
        placeholder="Enter some long form content."
        bind:value={content.notes}
    />
    <span>Aparência</span>
    <textarea
        class="textarea variant-form-material resize-none"
        rows="4"
        placeholder="Enter some long form content."
        bind:value={content.appearance}
    />
    <span>Personalidade</span>
    <textarea
        class="textarea variant-form-material resize-none"
        rows="4"
        placeholder="Enter some long form content."
        bind:value={content.personality}
    />
    <span>Historia</span>
    <textarea
        class="textarea variant-form-material resize-none"
        rows="4"
        placeholder="Enter some long form content."
        bind:value={content.lore}
    />
    <span>Objetivo</span>
    <textarea
        class="textarea variant-form-material resize-none"
        rows="4"
        placeholder="Enter some long form content."
        bind:value={content.objective}
    />
</div>

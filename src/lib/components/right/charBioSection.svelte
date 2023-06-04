<script lang="ts">
    import type { CharInfo } from "$lib/scripts/types";
    import VirtualList from "svelte-tiny-virtual-list";

    export let content: CharInfo;

    const GetData = (index: number): string[] => {
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

<VirtualList itemCount={5} height={676} width="fit" itemSize={100}>
    <div slot="item" let:index>
        <span>{GetData(index)[0]}</span>
        <textarea
            class="textarea variant-form-material"
            rows="4"
            placeholder="Enter some long form content."
            value={GetData(index)[1]}
        />
    </div>
</VirtualList>

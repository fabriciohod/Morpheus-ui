<script lang="ts">
    import type { EquipmentItem, ItemWithRoll, SimpleItem, Weapon } from "$lib/scripts/types";
    import { AccordionItem } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";

    export let data: (SimpleItem| EquipmentItem | ItemWithRoll | Weapon);
    export let summary = " ";

    const dispatcher = createEventDispatcher();

    const addBtnClicked = () => {
        dispatcher("addBtnClicked", {...data});
    };
</script>

<div class="relative m-1">
    <button
        class="font-semibold btn-icon variant-filled-success absolute h-8 w-8 translate-y-1 translate-x-[42rem]"
        on:click={(e) => addBtnClicked()}>+</button
    >
    <AccordionItem>
        <svelte:fragment slot="lead">
            {data.name}
        </svelte:fragment>
        <svelte:fragment slot="summary">
            {summary}
        </svelte:fragment>
        <svelte:fragment slot="content">
            <slot />
            {@html data.description}
        </svelte:fragment>
    </AccordionItem>
</div>

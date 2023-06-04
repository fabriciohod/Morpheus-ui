<script lang="ts">
    import type { Inventory, SimpleItem } from "$lib/scripts/types";
    import { AccordionItem } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";
    import BookMark from "../bookMark.svelte";

    export let data: SimpleItem = { name: "", description: "", pinned: false };
    export let canBeRemove = true;
    export let pinnedList: Inventory;

    const dispatcher = createEventDispatcher();
    const remove = () => {
        dispatcher("RemoveClicked");
    };
</script>

<div class="items-center bg-surface-800 rounded-md relative">
    <BookMark
        bind:isPinned={data.pinned}
        on:PinClicked={(e) => {
            switch (e.detail) {
                case true:
                    pinnedList.push({...data});
                    break;
                case true:
                    pinnedList.splice(pinnedList.indexOf({...data}), 1);
                    break;
            }
        }}
    />
    <AccordionItem>
        <svelte:fragment slot="lead">
            <span class="ml-2">
                {data.name}
            </span>
        </svelte:fragment>
        <svelte:fragment slot="summary">{" "}</svelte:fragment>
        <svelte:fragment slot="content">
            {@html data.description}
            {#if canBeRemove}
                <div class="flex justify-end mt-4">
                    <button
                        class="btn variant-ghost-error text-xs tracking-widest uppercase"
                        on:click={(e) => remove()}
                    >
                        remover
                    </button>
                </div>
            {/if}
        </svelte:fragment>
    </AccordionItem>
</div>

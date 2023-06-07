<script lang="ts">
    import type { Inventory, SimpleItem } from "$lib/scripts/types";
    import {
        AccordionItem,
        modalStore,
        type ModalSettings,
    } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";
    import BookMark from "../bookMark.svelte";

    export let data: SimpleItem = { name: "", description: "", pinned: false };
    export let canBeRemove = true;
    export let canBeEditable = true;

    const modal: ModalSettings = {
        type: "component",
        component: "simpleItemEdit",
        meta: { info: data },
    };

    const dispatcher = createEventDispatcher();
    const remove = () => {
        dispatcher("RemoveClicked");
    };
</script>

<div class="items-center bg-surface-800 rounded-md relative">
    <BookMark bind:isPinned={data.pinned} />
    <AccordionItem>
        <svelte:fragment slot="lead">
            <span class="ml-2">
                {data.name}
            </span>
        </svelte:fragment>
        <svelte:fragment slot="summary">{" "}</svelte:fragment>
        <svelte:fragment slot="content">
            {@html data.description}
            <div class="flex flex-row-reverse justify-between mt-4">
                {#if canBeRemove}
                    <button
                        class="btn variant-ghost-error text-xs tracking-widest uppercase"
                        on:click={(e) => remove()}
                    >
                        remover
                    </button>
                {/if}
                {#if canBeEditable}
                    <button
                        class="btn variant-ghost-success text-xs tracking-widest uppercase"
                        on:click={() => modalStore.trigger(modal)}
                    >
                        Editar
                    </button>
                {/if}
            </div>
        </svelte:fragment>
    </AccordionItem>
</div>

<script>
    import Icon from "@iconify/svelte";
    import { createEventDispatcher } from "svelte";
    export let isPinned = false;

    const dispatcher = createEventDispatcher();
</script>

<button
    class="absolute translate-y-2"
    on:click={(e) => {
        dispatcher("PinClicked", (isPinned = !isPinned));
    }}
>
    {#if isPinned}
        <Icon icon="material-symbols:bookmark" width="22" />
    {:else}
        <Icon width={22} icon="material-symbols:bookmark-outline" />
    {/if}
</button>

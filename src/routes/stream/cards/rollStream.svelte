<script lang="ts">
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";
    import Icon from "@iconify/svelte";

    export let res: number;
    export let name: string;
    export let summary: string;
    export let index: number = 0;
</script>

<div class="bg-surface-800 flex flex-row items-center justify-between h-20 px-4 rounded-md">
    <button class=" flex flex-row [&>*]:pointer-events-none">
        <Icon class="m-auto" icon="fa-solid:dice-d20" width={32} />
        <div class="ml-2">
            <p class="">{name}</p>
            <p class="text-left text-xs font-light text-white/60 text-ellipsis">{summary}</p>
        </div>
    </button>
    <p  class="text-2xl"> = {res}</p>
</div>

<div
    class="card p-4 variant-filled-secondary"
    data-popup={`rollPopup-${index}`}
>
    <p>{summary}</p>
    <div class="arrow variant-filled-secondary" />
</div>

<script lang="ts">
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";
    import Icon from "@iconify/svelte";

    export let res: number;
    export let name: string;
    export let summary: string;
    export let index: number = 0;

    const rollPopup = (): PopupSettings => {
        return {
            event: "hover",
            target: `rollPopup-${index}`,
            placement: "bottom",
        };
    };
    console.log(summary);
</script>

<div class="bg-surface-800 flex flex-row items-center justify-between h-20 px-4 rounded-2xl outline outline-1 outline-warning-500/50">
    <button class=" flex flex-row [&>*]:pointer-events-none" use:popup={rollPopup()}>
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

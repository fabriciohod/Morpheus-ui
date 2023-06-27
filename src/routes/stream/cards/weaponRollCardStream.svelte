<script lang="ts">
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";
    import Icon from "@iconify/svelte";
    import type { WeaponRollResult } from "$lib/scripts/types";

    export let data: WeaponRollResult;
    export let index: number = 0;

</script>

<div
class="bg-surface-800 flex flex-col h-20 px-4 rounded-2xl outline outline-1 outline-warning-500/50"
>
{data.hitRes.name}
    <div class="grid grid-cols-4 gap-x-4 items-center">
        <Icon class="m-auto" icon="fa-solid:dice-d20" width={32} />
        <div class="flex flex-col items-center" >
            <p class="text-2xl">{data.hitRes.result}</p>
            Acerto
        </div>
        <hr class="rotate-90 -translate-y-1"/>
        <div class="flex flex-col items-center">
            <p class="text-2xl">{data.damageRes.result}</p>
            Dano
        </div>
    </div>
</div>

<div
    class="card p-4 variant-filled-secondary"
    data-popup={`hitRollPopup-${index}`}
>
    <p>{data.hitRes.rollSummary}</p>
    <div class="arrow variant-filled-secondary" />
</div>

<div
    class="card p-4 variant-filled-secondary"
    data-popup={`damageRollPopup-${index}`}
>
    <p>{data.damageRes.rollSummary}</p>
    <div class="arrow variant-filled-secondary" />
</div>

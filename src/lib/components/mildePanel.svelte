<script>
    import { MainProficiencys } from "$lib/characterData";
    import Proficiency from "./center/proficiency.svelte";
</script>

<div
    class="min-h-[44.53rem] w-[36rem] max-lg:w-[41rem] max-lg:mx-4 px-8 py-2 bg-surface-600 flex justify-center rounded-2xl"
>
    <div class="pt-4">
        <div class="grid grid-cols-5">
            <span class=" -translate-x-6 max-2xl:-translate-x-3 max-2xl:text-sm"
                >Upgrade</span
            >
            <span class=" -translate-x-6 max-2xl:-translate-x-4 max-2xl:text-sm"
                >Treino</span
            >
            <span class=" translate-x-0 max-2xl:-translate-x-1 max-2xl:text-sm"
                >Dado</span
            >
            <span class=" translate-x-0 max-2xl:-translate-x-3 max-2xl:text-sm"
                >Perícia</span
            >
            <span class=" translate-x-12 max-2xl:translate-x-12 max-2xl:text-sm"
                >Bonus</span
            >
        </div>
        {#each $MainProficiencys as proficiency, i}
            <Proficiency bind:data={proficiency} />
        {/each}
    </div>
</div>

<script lang="ts">
    import { RollHistory } from "$lib/characterData";
    import Roll from "../cards/roll.svelte";
</script>

<div class="p-4">
    {#each $RollHistory as roll, i}
        <div class="mb-2">
            <Roll name={roll.name} res={roll.result} summary={roll.rollSummary} index={i}/>
        </div>
    {/each}
</div>

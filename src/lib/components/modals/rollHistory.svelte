<script lang="ts">
    import { RollHistory } from "$lib/characterData";
    import Roll from "../cards/roll.svelte";
    import WeaponRollCard from "../cards/weaponRollCard.svelte";
</script>

<div class="p-4">
    {#each ($RollHistory.reverse()) as roll, i}
        <div class="mb-2">
            {#if "hitRes" in roll}
                <WeaponRollCard data={roll} index={i}/>
            {:else}
                <Roll
                    name={roll.name}
                    res={roll.result}
                    summary={roll.rollSummary}
                    index={i}
                />
            {/if}
        </div>
    {/each}
</div>

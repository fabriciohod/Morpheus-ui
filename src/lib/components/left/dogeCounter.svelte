<script lang="ts">
    import {
        MainStats,
        MainDefensiveStats,
        MainProficiencys,
        GetValueProficiency,
    } from "$lib/characterData";
    import { IconRun } from "@tabler/icons-svelte";
    // DEX+Atletismo+Equipamento
</script>

<div class="relative w-fit h-fit flex flex-col items-center m-auto">
    <span class="absolute translate-y-12 bg-surface-600"
        >{$MainStats[3].value +
            GetValueProficiency($MainProficiencys[8]) +
            $MainDefensiveStats.DOGE_equipment}</span
    >
    <IconRun class="m-auto" size={67} stroke={1} />
    <p>Esquiva</p>
</div>

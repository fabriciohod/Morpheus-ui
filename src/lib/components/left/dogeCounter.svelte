<script lang="ts">
    import { Proficiency } from "$lib/scripts/stores/proficiencys";
    import { FindStat, storeDefensiveStats } from "$lib/scripts/stores/stats";
    import { E_Proficiencys } from "$lib/scripts/types/proficiencys";
    import { E_Stat } from "$lib/scripts/types/stat";
    import { IconRun } from "@tabler/icons-svelte";
    import { get } from "svelte/store";
    // DEX+Atletismo+Equipamento
</script>

<div class="relative w-fit h-fit flex flex-col items-center m-auto">
    <span class="absolute translate-y-12 bg-surface-600"
        >{FindStat(E_Stat.DEX).value +
            Proficiency.FindAndGetValue(E_Proficiencys.Atletismo) +
            $storeDefensiveStats.DOGE_equipment}</span
    >
    <IconRun class="m-auto" size={67} stroke={1} />
    <p>Esquiva</p>
</div>

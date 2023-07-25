<script lang="ts">
    import { Proficiency } from "$lib/scripts/stores/proficiencys";
    import { FindStat, storeDefensiveStats } from "$lib/scripts/stores/stats";
    import { E_Proficiencys } from "$lib/scripts/types/proficiencys";
    import { E_Stat } from "$lib/scripts/types/stat";
    import { IconShield } from "@tabler/icons-svelte";
    import { get } from "svelte/store";
    // Defesa (CON+Rusticidade+Equipamento)
</script>

<div class="relative w-fit h-fit flex flex-col items-center m-auto">
    <span class="absolute translate-y-5 bg-surface-600"
        >{FindStat(E_Stat.CON).value +
            Proficiency.FindAndGetValue(E_Proficiencys.Rusticidade) +
            $storeDefensiveStats.DEF_equipment}</span
    >
    <IconShield class="m-auto" size={67} stroke={1} />
    <p>Defesa</p>
</div>

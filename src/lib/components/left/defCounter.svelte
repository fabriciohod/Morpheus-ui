<script lang="ts">
    import {
        GetValueProficiency,
        MainStats,
        MainDefensiveStats,
        MainProficiencys,
    } from "$lib/characterData";
    import { IconShield } from "@tabler/icons-svelte";
    // Defesa (CON+Rusticidade+Equipamento)
</script>

<div class="relative w-fit h-fit flex flex-col items-center m-auto">
    <span class="absolute translate-y-5 bg-surface-600"
        >{$MainStats[0].value +
            GetValueProficiency($MainProficiencys[9]) +
            $MainDefensiveStats.DEF_equipment}</span
    >
    <IconShield class="m-auto" size={67} stroke={1} />
    <p>Defesa</p>
</div>

<script lang="ts">
    import { GetRaceAbilitys } from "$lib/scripts/abilitys/racesAbilitys";
    import { RaceAbilitys } from "$lib/scripts/stores/storege";
    import type { T_CharInfo } from "$lib/scripts/types/character";
    import type { T_SimpleItem } from "$lib/scripts/types/items";

    export let data: T_CharInfo;
    let leastAbilitys: T_SimpleItem[];

    const addRaceAbilitys = () => {
        if (data.race === 0) return;
        let temp = GetRaceAbilitys(data.race);
        leastAbilitys = temp;

        console.log(data.race);
        console.log(temp);

        RaceAbilitys.set([]);
        RaceAbilitys.set({ ...temp });
    };
</script>

<div>
    <select
        bind:value={data.race}
        on:change={(e) => addRaceAbilitys()}
        class="select variant-form-material"
    >
        <option value={0}>Raça</option>
        <option value={1}>Humano</option>
        <option value={2}>Eh'i</option>
        <option value={3}>Andromeda Eh'i</option>
        <option value={4}>Kletka</option>
        <option value={5}>Tockta</option>
        <option value={6}>Fuwus</option>
        <option value={7}>Ankemo'Dor</option>
        <option value={8}>Dae'Honis</option>
        <option value={9}>Cephacto</option>
        <option value={10}>Uworcus</option>
        <option value={11}>Wux</option>
        <option value={12}>Emordoris</option>
        <option value={13}>Hon'Tas</option>
        <option value={14}>Panzer</option>
        <option value={15}>Carjarel</option>
        <option value={16}>Baalzuc</option>
    </select>
</div>

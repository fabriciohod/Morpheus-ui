<script lang="ts">
    import { Tab, TabGroup, Toast } from "@skeletonlabs/skeleton";
    import CrateAbility from "./crateAbility.svelte";
    import ClassesAbilitys from './creation/classesAbilitys.svelte';
    import { Berserker, Briguento, Tank } from '$lib/scripts/abilitys/classes/fighterAbility';
    import { Academico, Armeiro, Regulador } from '$lib/scripts/abilitys/classes/engineerAbility';
    import { Comando, Fantasma, Operador } from '$lib/scripts/abilitys/classes/stealthAbility';
    
    let tabSet: number = 0;
</script>

<div class="bg-surface-600 w-[50rem] min-h-[40rem] h-fit rounded-2xl px-4 py-2">
    <TabGroup active="bg-warning-700/70">
        <Tab bind:group={tabSet} name="tab1" value={0}>Combatente</Tab>
        <Tab bind:group={tabSet} name="tab2" value={1}>Engenheiro</Tab>
        <Tab bind:group={tabSet} name="tab3" value={2}>Furtivo</Tab>
        <Tab bind:group={tabSet} name="tab3" value={3}>Adicionar</Tab>
        <svelte:fragment slot="panel">
            {#if tabSet === 0}
                <ClassesAbilitys name1="Berserker" name2="Tank" name3="Briguento" arr1={Berserker} arr2={Tank} arr3={Briguento} />
            {:else if tabSet === 1}
                <ClassesAbilitys name1="Regulador" name2="Acadêmico" name3="Armeiro" arr1={Regulador} arr2={Academico} arr3={Armeiro} />
            {:else if tabSet === 2}
                <ClassesAbilitys name1="Operador" name2="Fantasma" name3="Comando" arr1={Operador} arr2={Fantasma} arr3={Comando} />
            {:else if tabSet === 3}
                <CrateAbility />
            {/if}
        </svelte:fragment>
    </TabGroup>
</div>
<Toast/>
<script lang="ts">
	import AppShell from '$lib/components/appShell.svelte';
	import BaseAttributes from '$lib/components/characterSheet/baseAttributes.svelte';
	import Panel from '$lib/components/panel.svelte';
	import { recordAsArray, type SystemConfiguration } from '$lib/types/systemConfiguration';
	import HpBar from '$lib/components/characterSheet/hpBar.svelte';
	import ArmorStat from '$lib/components/characterSheet/armorStat.svelte';
	let test: SystemConfiguration = {
		name: 'test',
		label: 't',
		characterSheet: {
			attributes: {
				CON: { name: 'Constituicao', label: 'CON', value: 0, bonus: 0 },
				INT: { name: 'Intelecto', label: 'INT', value: 0, bonus: 0 },
				FOR: { name: 'Forca', label: 'FOR', value: 0, bonus: 0 },
				DEX: { name: 'Destreza', label: 'DEX', value: 0, bonus: 0 },
				CAR: { name: 'Carisma', label: 'CAR', value: 0, bonus: 0 }
			}
		}
	};
</script>

<AppShell>
	<div slot="right">
		<Panel title="Atributos">
			<div class="flex justify-around flex-wrap">
				{#each recordAsArray(test.characterSheet.attributes) as item}
					<BaseAttributes name={item.name} />
				{/each}
			</div>
		</Panel>
		<Panel title="Info" cardBevel={2} width="w-96">
		<div class="flex">
			<div class="flex flex-col justify-around mr-16">
				<HpBar currentValue={30} maxValue={100}/>
				<HpBar currentValue={30} maxValue={100}/>
			</div>
			<div class="flex justify-around">
				<ArmorStat/>
				<ArmorStat/>
			</div>
		</div>
		</Panel>
	</div>
</AppShell>

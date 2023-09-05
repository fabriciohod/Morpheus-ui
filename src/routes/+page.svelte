<script lang="ts">
	import AppShell from '$lib/components/appShell.svelte';
	import BaseAttributes from '$lib/components/characterSheet/baseAttributes.svelte';
	import Panel from '$lib/components/panel.svelte';
	import { recordAsArray, type SystemConfiguration } from '$lib/types/systemConfiguration';
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
		<Panel title="Info" cardBevel={2}>
			<div class="grid grid-rows-2 gap-2">
				<div class="w-64 h-9">
					<progress value="30" max="100" class="card-polygon-1 bg-morpheus-darker h-full" />
				</div>
				<div class="w-64 h-9">
					<progress value="30" max="100" class="card-polygon-1 bg-morpheus-darker h-full" />
				</div>
			</div>
		</Panel>
	</div>
</AppShell>

<style>
	progress::-webkit-progress-bar {
		background-color: red;
	}

	progress::-moz-progress-bar {
		background-color: red;
	}
</style>

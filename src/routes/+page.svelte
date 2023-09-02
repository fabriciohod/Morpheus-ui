<script lang="ts">
	import AppShell from '$lib/componets/appShell.svelte';
	import BaseAttributes from '$lib/componets/character sheet/baseAttributes.svelte';
	import Panel from '$lib/componets/panel.svelte';
	const base = ['Contituicao', 'Intelecto', 'Forca', 'Destreza', 'Carisma'];
</script>

<AppShell>
	<div slot="right">
		<Panel title="Atributos">
			<div class="flex justify-around flex-wrap">
				{#each base as item}
					<BaseAttributes name={item} />
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

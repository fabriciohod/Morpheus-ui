<script lang="ts">
	import AppShell from '$lib/componets/appShell.svelte';
	import Panel from '$lib/componets/panel.svelte';
	const base = ['Contituicao', 'Intelecto', 'Forca', 'Destreza', 'Carisma'];
</script>

<AppShell>
	<div slot="right">
		<Panel title="Atributos">
			<div class="flex justify-around flex-wrap">
				{#each base as item}
					<div class="flex flex-col items-center justify-center">
						<p>{item}</p>
						<input type="number" class="bg-morpheus-darker w-12 h-12 text-center" value="0" />
					</div>
				{/each}
			</div>
		</Panel>
		<Panel title="Info" cardBevel={2}>
			<h1>Rolls</h1>
		</Panel>
	</div>
</AppShell>

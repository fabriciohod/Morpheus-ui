<script lang="ts">
	export let title = '';
	export let cardBevel: 1 | 2 = 1;
</script>

<div class={`card-polygon-${cardBevel} text-white m-2 pb-2 bg-morpheus-dark`}>
	{#if title !== ''}
		<h1 class={`card-polygon-${cardBevel} text-white bg-morpheus-highlight w-40 mb-1 px-4`}>
			{title}
		</h1>
	{/if}
	<div class="px-1">
		<slot />
	</div>
</div>

<script lang="ts">
	export let name: string;
</script>

<div class="flex flex-col items-center justify-center">
	<p>{name}</p>
	<input type="number" class="bg-morpheus-darker w-12 h-12 text-center" value="0" />
</div>

<style>
	/*chrome*/
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/*firefox*/
	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
		margin: 0;
	}
</style>

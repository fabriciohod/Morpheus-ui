<script lang="ts">
	export let currentValue: number
	export let maxValue: number

	let inputValue = currentValue.toString()

	function calc() {
		const match = inputValue.match(/(\d+)\s*([-+///*])\s*(\d+)/)
		
		if(!match) {
			inputValue = currentValue.toString()
			return
		}

		const num1 = parseInt(match[1]);
		const operator = match[2];
		const num2 = parseInt(match[3]);

		const operations = {
			'+': (a:number, b:number) => a + b,
			'-': (a:number, b:number) => a - b,
			'*': (a:number, b:number) => Math.ceil(a * b),
			'/': (a:number, b:number) => Math.ceil(a / b),
		};

		if (operator in operations) {
			//@ts-ignore
			currentValue = Math.abs(operations[operations](num1, num2));
			inputValue = currentValue.toString()
		}
	}
</script>

<div class="flex justify-center items-center card-polygon-1 w-fit h-9">
	<progress value={currentValue} max={maxValue} class="card-polygon-1 bg-morpheus-darker h-full" />
	<span class="absolute -translate-x-5">
		<input 
			type="text" 
			class="bg-transparent w-16 text-right" 
			bind:value={inputValue}
			on:change={calc}> 
			| {maxValue}
	</span>
</div>

<style>
	progress::-webkit-progress-bar {
		@apply bg-red-700;
	}

	progress::-moz-progress-bar {
		@apply bg-red-700;
	}
</style>

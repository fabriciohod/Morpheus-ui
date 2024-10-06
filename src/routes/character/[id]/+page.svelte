<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let data;

	let isPortuguese = false;

	onMount(() => {
		isPortuguese = window.navigator.language === 'pt-BR';
	});
</script>

<header class="flex flex-row w-full justify-between bg-zinc-900/35 px-96 py-2 mb-2 clipped-btn">
	<label for="name">
		<span>Nome:</span>
		<input type="text" id="name" class="w-30 bg-zinc-700/45 polygonL" />
	</label>
	<label for="class" class="flex">
		<span class="mr-2">Classe:</span>
		<section>
			<select id="class" class="text-white w-30 p-1 bg-zinc-700/45 polygonL">
				<option value="1">Berserker</option>
				<option value="2">Tank</option>
				<option value="3">Briguento</option>
				<option value="4">Regulador</option>
				<option value="5">Acadêmico</option>
				<option value="6">Armeiro</option>
				<option value="7">Operador</option>
				<option value="8">Fantasma</option>
				<option value="9">Comando</option>
			</select>
		</section>
	</label>
	<label for="species" class="flex">
		<span class="mr-2">Especie:</span>
		<section>
			<select id="species" class="text-white w-30 p-1 bg-zinc-700/45 polygonL">
				<option value="1">Humano</option>
				<option value="2">Eh'i</option>
				<option value="3">Andromeda Eh'i</option>
				<option value="4">Kletka</option>
				<option value="5">Tockta</option>
				<option value="6">Fuwus</option>
				<option value="7">Ankemo'Dor</option>
				<option value="8">Dae'Honis</option>
				<option value="9">Cephacto</option>
				<option value="10">Uworcus</option>
				<option value="11">Wux</option>
				<option value="12">Emordoris</option>
				<option value="13">Hon'Tas</option>
				<option value="14">Panzer</option>
				<option value="15">Carjarel</option>
				<option value="16">Baalzuc</option>
			</select>
		</section>
	</label>
</header>
<div class="flex flex-row w-full h-screen">
	<div class="flex flex-col w-fit h-fit bg-zinc-900/35 polygonR p-4">
		<div class="w-56 bg-zinc-900/35 p-4 polygonL">
			<label for="roll-dice" class="flex">
				<button class="w-14 h-10 bg-zinc-700/45 polygonR mr-1 active:bg-zinc-500 transition-all">
					<Icon icon="fa-solid:dice-d20" class="w-5 h-5 m-auto" />
				</button>
				<input
					type="text"
					id="roll-dice"
					class="w-full bg-zinc-700/45 polygonL text-center placeholder:text-white/15"
					placeholder="1d20 + 69"
				/>
			</label>
		</div>
		<div class="flex w-56 bg-zinc-900/35 p-4 polygonL mt-2">
			<div class="w-full translate-x-6">
				<label for="con" class="grid grid-cols-2 mb-2">
					<span class="mr-2">Constituição</span>
					<input
						type="number"
						id="con"
						class=" text-center w-12 p-1 text-white bg-zinc-700/45 polygonL [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						placeholder="0"
						min="0"
						max="20"
					/>
				</label>
				<label for="con" class="grid grid-cols-2 mb-2">
					<span class="mr-2">Constituição</span>
					<input
						type="number"
						id="con"
						class=" text-center w-12 p-1 text-white bg-zinc-700/45 polygonL [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						placeholder="0"
						min="0"
						max="20"
					/>
				</label>
				<label for="dex" class="grid grid-cols-2 mb-2">
					<span class="mr-2">Destreza</span>
					<input
						type="number"
						id="dex"
						class=" text-center w-12 p-1 text-white bg-zinc-700/45 polygonL [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						placeholder="0"
						min="0"
						max="20"
					/>
				</label>
				<label for="int" class="grid grid-cols-2 mb-2">
					<span class="mr-2">Intelecto</span>
					<input
						type="number"
						id="int"
						class=" text-center w-12 p-1 text-white bg-zinc-700/45 polygonL [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						placeholder="0"
						min="0"
						max="20"
					/>
				</label>
				<label for="str" class="grid grid-cols-2">
					<span class="mr-2">Força</span>
					<input
						type="number"
						id="str"
						class=" text-center w-12 p-1 text-white bg-zinc-700/45 polygonL [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						placeholder="0"
						min="0"
						max="20"
					/>
				</label>
			</div>
		</div>
		<div class=" bg-zinc-900/35 w-56 p-4 mt-2 relative polygonL">
			<div class="">
				<div id="health-bar-hidden" class="polygonR">
					<div
						class="flex justify-center items-center w-full h-10 bg-red-800 z-[1]"
						style="width: 100%;"
					></div>
				</div>
				<div
					id="health-bar-front"
					class="polygonR absolute w-full h-10 -translate-y-10 bg-red-500"
					style="width: 50%;"
				></div>
			</div>
			<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">100/100</span>
		</div>
		<div class="flex justify-around w-56 bg-zinc-900/35 p-4 mt-2 polygonL">
			<div class="relative w-8" title="Defesa">
				<Icon icon="solar:shield-minimalistic-line-duotone" height="3.3rem" />
				<span
					class="absolute top-1/2 left-1/2 translate-x-[.09rem] -translate-y-3 mix-blend-difference"
					>99</span
				>
			</div>
			<div class="relative w-8" title="Esquiva">
				<Icon icon="game-icons:dodge" height="3.3rem" />
				<span
					class="absolute top-1/2 left-1/2 -translate-x-[.09rem] translate-y-1 mix-blend-difference"
					>99</span
				>
			</div>
		</div>
	</div>
	<div class="flex flex-col w-fit h-fit bg-zinc-900/35 polygonR p-4 mx-2">
		{#each data.defaults.proficiencys as proficiency}
			<div class="bg-zinc-900/35 polygonL my-1 p-2">
				<input
					type="checkbox"
					class="h-4 w-4 appearance-none bg-zinc-700 checked:bg-yellow-600 hover:bg-yellow-700 clipped-small"
				/>
				<select
					name="profLevel"
					id="profLevel"
					class="text-white w-30 mx-2 p-1 bg-zinc-700/45 polygonL"
				>
					<option value="1">Leigo</option>
					<option value="2">Trainado</option>
				</select>
				<select name="atribute" id="atribute" class="text-white w-30 p-1 bg-zinc-700/45 polygonL">
					{#each proficiency.attribute as attribute}
						<option value={attribute}>{attribute}</option>
					{/each}
				</select>
				<span class="mx-2">
					{#if isPortuguese}
						{proficiency.name.pt}
					{:else}
						{proficiency.name.en}
					{/if}
				</span>
				<input
					type="number"
					min="0"
					class="w-12 p-1 text-center bg-zinc-700/45 polygonL [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
				/>
			</div>
		{/each}
	</div>
</div>

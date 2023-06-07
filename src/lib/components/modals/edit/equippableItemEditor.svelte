<script lang="ts">
    import { StatModifiers, type EquipmentItem } from "$lib/scripts/types";
    import { modalStore } from "@skeletonlabs/skeleton";

    let item = $modalStore[0].meta?.info as EquipmentItem;
</script>

<div class="bg-surface-600 w-[35rem] p-5 rounded-2xl">
    <form action="" class="flex flex-col">
        <input
            class="input variant-form-material"
            placeholder="Nome"
            type="text"
            bind:value={item.name}
        />
        <textarea
            class="input variant-form-material resize-none my-4"
            placeholder="Descrição"
            cols="30"
            rows="10"
            bind:value={item.description}
        />
        <div class="flex justify-center mt-4">
            <div class="flex flex-col mr-8">
                <span class="mb-2">Valor de bonus</span>
                <input
                    type="number"
                    class="input variant-form-material w-32"
                    placeholder="0"
                    bind:value={item.value}
                />
            </div>
            <div class="flex flex-col">
                <span class="mb-2">Modificador de</span>
                <select class="select w-32" bind:value={item.modifyStat}>
                    {#each Object.values(StatModifiers).filter( (v) => isNaN(Number(v)) ) as modifier, i}
                        <option value={i}>{modifier}</option>
                    {/each}
                </select>
            </div>
        </div>
    </form>
</div>

<script lang="ts">
    import { StatModifiers, type EquipmentItem, type Inventory } from "$lib/scripts/types";
    import { toastStore, type ToastSettings } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";

    export let inventory: Inventory;

    let item: EquipmentItem = {
        name: "",
        description: "",
        modifyStat: StatModifiers.Defesa,
        value: 0,
        isEquip: false,
        pinned:false
    };

    const dispatch = createEventDispatcher();

    const error1: ToastSettings = {
        message: "Preencha todos os campos",
        background: "variant-filled-error",
    };
    const error2: ToastSettings = {
        message: "ja existente",
        background: "variant-filled-error",
    };

    const addBtnClicked = () => {
        if (item.name === "" || item.description == "") {
            toastStore.trigger(error1);
            return;
        }
        if (
            inventory.find(
                (i) =>
                    i.name.trim().toLowerCase() ==
                    item.name.trim().toLowerCase()
            )
        ) {
            toastStore.trigger(error2);
            return;
        }

        dispatch("itemCreated", {...item});
    };
</script>

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
    <div class="relative h-full flex bottom-2 justify-end">
        <button
            class="absolute -bottom-20 btn variant-filled-success"
            on:click={(e) => addBtnClicked()}>Adicionar</button
        >
    </div>
</form>

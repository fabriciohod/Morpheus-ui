<script lang="ts">
    import type { Inventory, SimpleItem } from "$lib/scripts/types";
    import { toastStore, type ToastSettings } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";

    export let inventory: Inventory;
    let item: SimpleItem = { name: "", description: "" };
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
        class="input variant-form-material resize-none"
        placeholder="Descrição"
        cols="30"
        rows="16"
        bind:value={item.description}
    />
    <div class="mt-4 flex justify-end">
        <button
            class="btn variant-filled-success"
            on:click={(e) => addBtnClicked()}>Adicionar</button
        >
    </div>
</form>

<script lang="ts">
    import type { T_Inventory } from "$lib/scripts/stores/storege";
    import { E_DiceType } from "$lib/scripts/types/dice";
    import type { T_ItemWithRoll } from "$lib/scripts/types/items";
    import { E_Proficiencys } from "$lib/scripts/types/proficiencys";
    import { E_Stat } from "$lib/scripts/types/stat";
    import { toastStore, type ToastSettings } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";

    export let inventory: T_Inventory;
    let item: T_ItemWithRoll = {
        name: "",
        description: "",
        rollTimes: 1,
        diceToRoll: E_DiceType.D20,
        baseStat: [],
        proficiencys: [],
        pinned: false,
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
        if (item.name === "" || item.description === "") {
            toastStore.trigger(error1);
            return;
        }
        if (
            inventory.find(
                (a) =>
                    a.name.trim().toLocaleLowerCase() ==
                    item.name.trim().toLocaleLowerCase()
            )
        ) {
            toastStore.trigger(error2);
            return;
        }
        dispatch("itemCreated", { ...item });
    };
    const addOrRemoveBaseStat = (add: boolean, stat: E_Stat) => {
        switch (add) {
            case true:
                item.baseStat.push(stat);
                break;
            case false:
                item.baseStat.splice(item.baseStat.indexOf(stat));
        }

        console.log(item);
    };

    const addOrRemoveProficiency = (add: boolean, prof: E_Proficiencys) => {
        switch (add) {
            case true:
                item.proficiencys.push(prof);
                break;
            case false:
                item.proficiencys.splice(item.proficiencys.indexOf(prof));
        }
    };

    const proficiencysNames = Object.values(E_Proficiencys).filter((v) =>
        isNaN(Number(v))
    );
</script>

<form class="" action="">
    <input
        type="text"
        class="input variant-form-material col-span-2 row-span-1"
        placeholder="Nome"
        bind:value={item.name}
    />
    <textarea
        cols="30"
        rows="10"
        class="input variant-form-material resize-none"
        placeholder="Descrição"
        bind:value={item.description}
    />
    <div class="grid grid-cols-2">
        <div class="flex h-15">
            <div class="flex flex-col mr-4">
                <span>Quantidade</span>
                <input
                    type="number"
                    bind:value={item.rollTimes}
                    min="1"
                    class="input variant-form-material w-24"
                />
            </div>
            <div>
                <span class="m-auto">Dado</span>
                <select class="select variant-form-material" value={20}>
                    {#each Object.values(E_DiceType).filter((v) => !isNaN(Number(v))) as dice}
                        <option value={dice}>D{dice}</option>
                    {/each}
                </select>
            </div>
        </div>

        <div class="mx-6">
            <span class="m-auto">Stats Base</span>
            <div class="flex flex-wrap justify-between w-32">
                {#each Object.values(E_Stat).filter( (v) => isNaN(Number(v)) ) as stat, i}
                    <label class="flex items-center space-x-2">
                        <input
                            on:click={(e) =>
                                addOrRemoveBaseStat(e.srcElement.checked, i)}
                            class="checkbox"
                            type="checkbox"
                        />
                        <p>{stat}</p>
                    </label>
                {/each}
            </div>
        </div>

        <div class="col-span-2">
            <span class="m-auto">Proficiências</span>
            <div class="grid grid-cols-4 gap-x-12 justify-between">
                {#each proficiencysNames as prof, i}
                    <label class="flex items-center space-x-2">
                        <input
                            on:click={(e) =>
                                addOrRemoveProficiency(e.srcElement.checked, i)}
                            class="checkbox"
                            type="checkbox"
                        />
                        <p>{prof}</p>
                    </label>
                {/each}
            </div>
        </div>
    </div>
    <div class="flex justify-end mt-2">
        <button
            class="btn variant-filled-success"
            on:click={(e) => addBtnClicked()}
        >
            Adicionar</button
        >
    </div>
</form>

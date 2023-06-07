<script lang="ts">
    import {
        DiceType,
        ProficiencysEnum,
        UseStat,
        type ItemWithRoll,
    } from "$lib/scripts/types";
    import { modalStore } from "@skeletonlabs/skeleton";

    let item = $modalStore[0].meta?.info as ItemWithRoll;

    const addOrRemoveBaseStat = (add: boolean, stat: UseStat) => {
        switch (add) {
            case true:
                item.baseStat.push(stat);
                break;
            case false:
                item.baseStat.splice(item.baseStat.indexOf(stat));
        }

        console.log(item);
    };

    const addOrRemoveProficiency = (add: boolean, prof: ProficiencysEnum) => {
        switch (add) {
            case true:
                item.proficiencys.push(prof);
                break;
            case false:
                item.proficiencys.splice(item.proficiencys.indexOf(prof));
        }
    };

    const proficiencysNames = Object.values(ProficiencysEnum).filter((v) =>
        isNaN(Number(v))
    );
</script>

<div class="bg-surface-600 p-5 rounded-2xl">
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
                    <select
                        class="select variant-form-material"
                        bind:value={item.diceToRoll}
                    >
                        {#each Object.values(DiceType).filter((v) => !isNaN(Number(v))) as dice}
                            <option value={dice}>D{dice}</option>
                        {/each}
                    </select>
                </div>
            </div>

            <div class="mx-6">
                <span class="m-auto">Stats Base</span>
                <div class="flex flex-wrap justify-between w-32">
                    {#each Object.values(UseStat).filter( (v) => isNaN(Number(v)) ) as stat, i}
                        <label class="flex items-center space-x-2">
                            <input
                                checked={item.baseStat.find((b) => b === i)
                                    ? true
                                    : false}
                                on:click={(e) =>
                                    addOrRemoveBaseStat(
                                        e.srcElement.checked,
                                        i
                                    )}
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
                                checked={item.proficiencys.find((p) => p === i)
                                    ? true
                                    : false}
                                on:click={(e) =>
                                    addOrRemoveProficiency(
                                        e.srcElement.checked,
                                        i
                                    )}
                                class="checkbox"
                                type="checkbox"
                            />
                            <p>{prof}</p>
                        </label>
                    {/each}
                </div>
            </div>
        </div>
    </form>
</div>

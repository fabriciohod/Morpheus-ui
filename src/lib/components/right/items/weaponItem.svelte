<script lang="ts">
    import {
        UseStat,
        type Inventory,
        type Weapon,
        ProficiencysEnum,
    } from "$lib/scripts/types";
    import Icon from "@iconify/svelte";
    import { AccordionItem, toastStore, type ToastSettings } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";
    import BookMark from "../bookMark.svelte";
    import { WeaponDicesRoll } from "$lib/scripts/diceRoller";

    export let data: Weapon;
    export let canBeRemove: boolean = true;

    const roll = () => {
        const res = WeaponDicesRoll(data);

        const t: ToastSettings = {
            message: `Acerto:${res.hitRes.rollSummary} = ${res.hitRes.result}</br>
            Dano:${res.damageRes.rollSummary} = ${res.damageRes.result}`,
        };

        toastStore.trigger(t)
    };

    const dispatcher = createEventDispatcher();

    const remove = () => {
        dispatcher("RemoveClicked");
    };
</script>

<div class="relative">
    <BookMark bind:isPinned={data.pinned} />
    <button
        type="button"
        on:click={(e) => roll()}
        class="btn-icon variant-filled absolute w-8 translate-y-1 translate-x-[28rem] max-2xl:translate-x-[24rem]"
    >
        <Icon icon="fa-solid:dice-d20" />
    </button>
    <AccordionItem>
        <svelte:fragment slot="lead">
            <span class="ml-2">
                {data.name}
            </span>
        </svelte:fragment>
        <svelte:fragment slot="summary">{" "}</svelte:fragment>
        <svelte:fragment slot="content">
            <div class="text-xs opacity-70 mb-1">
                <span>Acerto: {data.hitDice_rollTimes}d{data.hitDice}</span>
                <span>Dano: {data.damageDice_rollTimes}d{data.damageDice}</span>
            </div>
            {@html data.description}
            <AccordionItem>
                <svelte:fragment slot="lead">Modificadores</svelte:fragment>
                <svelte:fragment slot="summary">{""}</svelte:fragment>
                <svelte:fragment slot="content">
                    <div class="flex justify-around">
                        <div class="flex flex-col">
                            <span>Bonus de acerto</span>
                            <input
                                type="number"
                                class="input variant-form-material w-32"
                                placeholder="0"
                                bind:value={data.hitDiceBonusFlat}
                            />
                        </div>
                        <div class="flex flex-col">
                            <span>Bonus de dano</span>
                            <input
                                type="number"
                                class="input variant-form-material w-32"
                                placeholder="0"
                                bind:value={data.damageBonusFlat}
                            />
                        </div>
                    </div>
                    <hr class="variant-filled-surface opacity-40" />
                    <div class="flex justify-around">
                        <div class="flex flex-col items-center">
                            <p>Base Stats</p>
                            <p>
                                <select
                                    multiple
                                    class="select variant-form-material w-32"
                                    bind:value={data.mainStatBonus}
                                >
                                    {#each Object.values(UseStat).filter( (v) => isNaN(Number(v)) ) as stat, i}
                                        <option value={i}>{stat}</option>
                                    {/each}
                                </select>
                            </p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p>Pericias</p>
                            <select
                                multiple
                                class="select variant-form-material w-fit"
                                bind:value={data.profBonus}
                            >
                                {#each Object.values(ProficiencysEnum).filter( (v) => isNaN(Number(v)) ) as stat, i}
                                    <option value={i}>{stat}</option>
                                {/each}
                            </select>
                        </div>
                    </div>
                </svelte:fragment>
            </AccordionItem>
            {#if canBeRemove}
                <div class="flex justify-end mt-4">
                    <button
                        class="btn variant-ghost-error text-xs tracking-widest uppercase"
                        on:click={(e) => remove()}
                    >
                        remover
                    </button>
                </div>
            {/if}
        </svelte:fragment>
    </AccordionItem>
</div>

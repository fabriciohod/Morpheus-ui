<script lang="ts">
    import {
        UseStat,
        type Inventory,
        type Weapon,
        ProficiencysEnum,
    } from "$lib/scripts/types";
    import Icon from "@iconify/svelte";
    import {
        AccordionItem,
        toastStore,
        type ToastSettings,
        modalStore,
        type ModalSettings,
    } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from "svelte";
    import BookMark from "../bookMark.svelte";
    import { WeaponDicesRoll } from "$lib/scripts/diceRoller";

    export let data: Weapon;
    export let canBeRemove: boolean = true;
    export let canBeEditable: boolean = true;

    const modal: ModalSettings = {
        type: "component",
        component: "weaponEdit",
        meta: { info: data },
    };

    const roll = () => {
        const res = WeaponDicesRoll(data);

        const t: ToastSettings = {
            message: `Acerto:${res.hitRes.rollSummary} = ${res.hitRes.result}</br>
            Dano:${res.damageRes.rollSummary} = ${res.damageRes.result}`,
        };

        toastStore.trigger(t);
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
            <div class="flex flex-row-reverse justify-between mt-4">
                {#if canBeRemove}
                    <button
                        class="btn variant-ghost-error text-xs tracking-widest uppercase"
                        on:click={(e) => remove()}
                    >
                        remover
                    </button>
                {/if}
                {#if canBeEditable}
                    <button
                        class="btn variant-ghost-success text-xs tracking-widest uppercase"
                        on:click={() => modalStore.trigger(modal)}
                    >
                        Editar
                    </button>
                {/if}
            </div>
        </svelte:fragment>
    </AccordionItem>
</div>

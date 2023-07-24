<script lang="ts">
    import { ApBar, HpBar, MainStats } from "$lib/characterData";
    import { RollDiceString } from "$lib/scripts/diceRoller";
    import { db } from "$lib/scripts/store";
    import Icon from "@iconify/svelte";
    import { toastStore, type ToastSettings } from "@skeletonlabs/skeleton";
    import DefCalc from "$lib/components/left/defCounter.svelte";
    import DogeCalc from "$lib/components/left/dogeCounter.svelte";
    import BaseStat from "$lib/components/left/primaryStats.svelte";
    import StatsBar from "$lib/components/left/statBar.svelte";

    let diceString = "";

    const error1: ToastSettings = {
        message: "Rolagem invalida",
        background: "variant-filled-error",
    };

    const error2: ToastSettings = {
        message: "Coloque os dados do servidor",
        background: "variant-filled-error",
    };

    const rollTest = () => {
        const regex = /^(\d*)?d(\d+)((\s*[+-]\s*\d+\s*)+)?$/i;

        if (diceString === "") {
            return;
        }

        if (!regex.test(diceString)) {
            toastStore.trigger(error1);
            return;
        }

        const res: import("$lib/scripts/types").RollResult = RollDiceString(
            diceString.trim()
        );

        const t: import("@skeletonlabs/skeleton").ToastSettings = {
            message: `${res.rollSummary} = ${res.result}`,
        };

        toastStore.trigger(t);
    };

    const saveHpAndAp = () => {
        localStorage.setItem("hpBar", JSON.stringify($HpBar));
        localStorage.setItem("apBar", JSON.stringify($ApBar));

        if (CharacterData.name == "") return;

        if (!(localStorage.getItem("url") && localStorage.getItem("key"))) {
            toastStore.trigger(error2);
            return;
        }

        $db.from("characters")
            .upsert(
                {
                    id: CharacterData.name,
                    hpBar: $HpBar,
                    apBar: $ApBar,
                },
                { onConflict: "id" }
            )
            .then((onrejected) => console.log(onrejected));
    };
</script>

<div class=" max-lg:w-[42rem]">
    <div class="w-96 max-lg:w-full max-lg:mx-2">
        <div class="h-fit bg-surface-600 p-3 mx-2 rounded-2xl">
            <div class="flex max-lg:justify-center">
                <button
                    type="button"
                    class="btn-icon variant-filled mr-2"
                    on:click={(e) => rollTest()}
                >
                    <Icon icon="fa-solid:dice-d20" />
                </button>
                <input
                    type="text"
                    placeholder="Rolar Dados"
                    bind:value={diceString}
                    class="input variant-form-material w-[17rem] max-lg:w-full"
                />
            </div>
        </div>
        <div
            class="h-fit bg-surface-600 p-3 m-2 rounded-2xl flex flex-wrap max-lg:grid grid-cols-2"
        >
            {#each $MainStats as _, i}
                <BaseStat bind:data={$MainStats[i]} />
            {/each}
        </div>
        <div class="max-lg:grid grid-cols-[54%_1fr]">
            <div class="h-fit bg-surface-600 p-3 m-2 rounded-2xl">
                <div class="grid grid-row-2 gap-3">
                    <StatsBar
                        name="PV"
                        data={$HpBar}
                        on:stopChange={saveHpAndAp}
                        baseStatIndex={0}
                        proficiencyIndex={9}
                        multipliers={10}
                        animateWhenCloseToEnd={true}
                    />
                    <StatsBar
                        name="AP"
                        on:stopChange={saveHpAndAp}
                        color="bg-warning-800"
                        data={$ApBar}
                        baseStatIndex={3}
                        proficiencyIndex={8}
                    />
                </div>
            </div>
            <div class="h-fit bg-surface-600 p-3 m-2 rounded-2xl">
                <div class="grid grid-cols-2">
                    <DefCalc />
                    <DogeCalc />
                </div>
            </div>
        </div>
    </div>
</div>
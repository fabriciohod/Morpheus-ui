<script lang="ts">
    import { listen } from "@tauri-apps/api/event";
    import { bounceIn, elasticIn, sineIn } from 'svelte/easing';
    import { fade, fly, slide } from "svelte/transition";
    import StatBar from "$lib/components/left/statBar.svelte";
    import type {
        CharInfo,
        RollResult,
        RuntimeBar,
        WeaponRollResult,
    } from "$lib/scripts/types";
    import RollStream from "./cards/rollStream.svelte";
    import { writable } from "svelte/store";
    import WeaponRollCardStream from "./cards/weaponRollCardStream.svelte";
    import { debug } from "svelte/internal";

    let hpBar: RuntimeBar = { currentValue: 0, maxValue: 0 };
    let apBar: RuntimeBar = { currentValue: 0, maxValue: 0 };
    let char: string;

    setInterval(() => {
        hpBar = JSON.parse(localStorage.getItem("hpBar") as string);
        apBar = JSON.parse(localStorage.getItem("apBar") as string);
        char = localStorage.getItem("leastOpen") as string;
    }, 400);

    let roll: RollResult | WeaponRollResult;
    let leastRoll: RollResult | WeaponRollResult;

    listen("NewRoll", (r) => {
        let temp = JSON.parse(r.payload as string) as (
            | RollResult
            | WeaponRollResult
        )[];

        roll = temp[temp.length - 1];
    });
</script>

<body class="bg-[#00ff00] flex items-center justify-center h-screen w-full p-4">
    <div class="w-[21rem] text-white z-10 scale-[2] translate-y-16">
        <div
            class="h-fit grid grid-rows-3 gap-2 bg-surface-500 p-3 m-2 rounded-md z-50 border-[0.15rem] border-[#ff8f00]"
        >
            <p class="m-auto text-xl">{char}</p>
            <StatBar
                name="PV"
                bind:data={hpBar}
                baseStatIndex={0}
                proficiencyIndex={9}
                multipliers={10}
                animateWhenCloseToEnd={true}
                showBtns={false}
                rounded="rounded-md"
            />
            <StatBar
                name="AP"
                color="bg-warning-800"
                bind:data={apBar}
                baseStatIndex={3}
                proficiencyIndex={8}
                showBtns={false}
                rounded="rounded-md"
            />
        </div>
        <div class="absolute w-80 translate-x-2 -translate-y-[15.8rem] -z-10 scale-95">
            {#if roll != undefined}
                {#if roll != leastRoll}
                    <div
                        in:fly={{ y: 80,duration:300 ,opacity: 1}}
                        out:fly={{ y: 90, delay: 2500, opacity: 1 }}
                        on:introend={() => (leastRoll = roll)}
                    >
                        {#if "hitRes" in roll}
                            <WeaponRollCardStream data={roll} />
                        {:else}
                            <RollStream
                                res={roll.result}
                                name={roll.name}
                                summary={roll.rollSummary}
                            />
                        {/if}
                    </div>
                {/if}
            {/if}
        </div>
    </div>
</body>

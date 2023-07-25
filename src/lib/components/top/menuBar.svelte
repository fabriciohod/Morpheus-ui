<script lang="ts">
    import { WebviewWindow } from "@tauri-apps/api/window";
    import {
        writeTextFile,
        BaseDirectory,
        createDir,
        readTextFile,
    } from "@tauri-apps/api/fs";
    import { onMount } from "svelte";
    import { open } from "@tauri-apps/api/dialog";
    import {
        toastStore,
        type ToastSettings,
        modalStore,
        type ModalSettings,
    } from "@skeletonlabs/skeleton";
    import type { StatBarType } from "$lib/scripts/stores/hpAndAp";
    import { HpBar, ApBar } from "$lib/scripts/stores/hpAndAp";
    import type { T_CharInfo } from "$lib/scripts/types/character";
    import type { T_DefensiveStats, T_Stat } from "$lib/scripts/types/stat";
    import type { T_Proficiency } from "$lib/scripts/types/proficiencys";
    import {
        Abilitys,
        Bag,
        RaceAbilitys,
        type T_Inventory,
    } from "$lib/scripts/stores/storege";
    import CharacterData from "$lib/scripts/stores/character";
    import { Proficiency } from "$lib/scripts/stores/proficiencys";
    import { get } from "svelte/store";
    import { storeBaseState, storeDefensiveStats } from "$lib/scripts/stores/stats";

    const savedBaseDir = BaseDirectory.Document;

    const saved: ToastSettings = {
        message: "Personagem salvo",
        background: "variant-filled-success",
        timeout: 2000,
    };

    const error: ToastSettings = {
        message: "Personagem deve ter um nome",
        background: "variant-filled-error",
        timeout: 2500,
    };

    interface charData {
        $CharacterData: T_CharInfo;
        $MainStats: T_Stat[];
        $MainProficiencys: T_Proficiency[];
        $MainDefensiveStats: T_DefensiveStats;
        $Bag: T_Inventory;
        $Abilitys: T_Inventory;
        $RaceAbilitys: T_Inventory;
        $HpBar: StatBarType;
        $ApBar: StatBarType;
    }

    const getJSONData = () => {
        const temp = {
            $CharacterData: get(CharacterData),
            $MainStats: get(storeBaseState),
            $MainProficiencys: get(Proficiency.store),
            $MainDefensiveStats: get(storeDefensiveStats),
            $Bag,
            $Abilitys,
            $RaceAbilitys,
            $HpBar,
            $ApBar,
        };

        return JSON.stringify(temp);
    };

    const saveFile = async () => {
        if (
            $CharacterData.name.toString() === "" ||
            $CharacterData.name.toString() === undefined
        ) {
            toastStore.trigger(error);
            return;
        }

        try {
            await createDir("Morpheus", {
                dir: savedBaseDir,
            }).finally(() => {
                writeTextFile(
                    `Morpheus\\${$CharacterData.name.toString()}.json`,
                    getJSONData(),
                    { dir: savedBaseDir }
                );
                saveLeast($CharacterData.name.toString());
            });
            console.log(getJSONData());
        } catch (err) {
            console.log(err);
        }
        toastStore.trigger(saved);
    };

    const readFile = async () => {
        try {
            const selectedPath = await open({
                multiple: false,
                title: "seleciona o personagem",
                filters: [
                    {
                        name: "",
                        extensions: ["json"],
                    },
                ],
            });
            const content = await readTextFile(selectedPath as string);
            const data = JSON.parse(content) as charData;

            console.log(data);
            loadCharData(data);
            saveLeast(data.$CharacterData.name);
        } catch (err) {
            console.log(err);
        }
    };

    const saveLeast = (char: string) => {
        localStorage.setItem("leastOpen", char);
    };

    const loadCharData = (char: charData) => {
        CharacterData.set(char.$CharacterData);
        storeBaseState.set(char.$MainStats);
        Proficiency.store.set(char.$MainProficiencys);
        storeDefensiveStats.set(char.$MainDefensiveStats);
        Bag.set(char.$Bag);
        Abilitys.set(char.$Abilitys);
        RaceAbilitys.set(char.$RaceAbilitys);
        HpBar.set(char.$HpBar);
        ApBar.set(char.$ApBar);
    };

    onMount(async () => {
        const charName = localStorage.getItem("leastOpen");

        if (charName === null) return;

        try {
            const content = await readTextFile(`Morpheus\\${charName}.json`, {
                dir: savedBaseDir,
            });

            loadCharData(JSON.parse(content) as charData);
        } catch (err) {
            console.log(err);
        }
    });

    const modal: ModalSettings = {
        type: "component",
        component: "serverInfo",
    };
</script>

<div
    class="flex items-center justify-between h-8 mx-2 mt-1 mb-2 max-w-[100rem] bg-surface-600 rounded-md p-2"
>
    <div>
        <button
            class="btn variant-filled-warning bg-opacity-80 h-3 text-sm"
            on:click={(e) => saveFile()}
        >
            Salvar
        </button>
        <button
            class="btn variant-filled-warning bg-opacity-80 h-3 text-sm mx-2"
            on:click={(e) => readFile()}
        >
            Carregar
        </button>
    </div>
    <div>
        <button
            class="btn variant-filled-warning bg-opacity-80 h-3 text-sm"
            on:click={(e) => {
                const webview = new WebviewWindow("a", {
                    url: "/stream",
                });
            }}
        >
            Stream Mode
        </button>
        <button
            class="btn variant-filled-warning bg-opacity-80 h-3 text-sm mx-2"
            on:click={(e) => modalStore.trigger(modal)}
        >
            Server Info
        </button>
    </div>
</div>

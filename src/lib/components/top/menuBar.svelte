<script lang="ts">
    import {
        writeTextFile,
        BaseDirectory,
        createDir,
        readTextFile,
    } from "@tauri-apps/api/fs";
    import { onMount } from "svelte";
    import { open } from "@tauri-apps/api/dialog";
    import {
        CharacterData,
        MainStats,
        MainProficiencys,
        MainDefensiveStats,
        Abilitys,
        RaceAbilitys,
        Bag,
        HpBar,
        ApBar,
        PinnedAbilitys,
        PinnedItems,
    } from "$lib/characterData";
    import { toastStore, type ToastSettings } from "@skeletonlabs/skeleton";
    import type {
        AbilityCollection,
        CharBio,
        CharInfo,
        DefensiveStats,
        DefensiveStats,
        EquipmentItem,
        Inventory,
        Proficiency,
        RuntimeBar,
        Stat,
    } from "$lib/scripts/types";

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
        $CharacterData: CharInfo;
        $MainStats: Stat[];
        $MainProficiencys: Proficiency[];
        $MainDefensiveStats: DefensiveStats;
        $Bag: Inventory;
        $Abilitys: Inventory;
        $RaceAbilitys: Inventory
        $HpBar: RuntimeBar;
        $ApBar: RuntimeBar;
        $PinnedAbilitys: Inventory;
        $PinnedItems: Inventory;
    }

    const getJSONData = () => {
        const temp: charData = {
            $CharacterData,
            $MainStats,
            $MainProficiencys,
            $MainDefensiveStats,
            $Bag,
            $Abilitys,
            $RaceAbilitys,
            $HpBar,
            $ApBar,
            $PinnedAbilitys,
            $PinnedItems,
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
        $CharacterData = char.$CharacterData;
        $MainStats = char.$MainStats;
        $MainProficiencys = char.$MainProficiencys;
        $MainDefensiveStats = char.$MainDefensiveStats;
        $Bag = char.$Bag;
        $Abilitys = char.$Abilitys;
        $RaceAbilitys = char.$RaceAbilitys
        $HpBar = char.$HpBar;
        $ApBar = char.$ApBar;
        $PinnedAbilitys = char.$PinnedAbilitys;
        $PinnedItems = char.$PinnedItems;
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
</script>

<div class="flex items-center h-8 bg-surface-600 mb-2 px-4 py-2 rounded-md">
    <button
        class="btn variant-filled-warning bg-opacity-80 h-3 text-sm"
        on:click={(e) => saveFile()}
    >
        Salvar
    </button>
    <button
        class="btn variant-filled-warning bg-opacity-80 h-3 text-sm mx-4"
        on:click={(e) => readFile()}
    >
        Carregar
    </button>
</div>

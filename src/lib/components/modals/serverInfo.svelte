<script lang="ts">
    import { db } from "$lib/scripts/stores/db";
    import { toastStore, type ToastSettings } from "@skeletonlabs/skeleton";
    import { createClient } from "@supabase/supabase-js";
    import { onMount } from "svelte";

    let url: string;
    let key: string;

    const success: ToastSettings = {
        message: "Salvo",
        background: "variant-filled-success",
    };

    function save() {
        localStorage.setItem("url", url);
        localStorage.setItem("key", key);
        
        if (url === undefined || key === undefined) return;

        toastStore.trigger(success);
        $db = createClient(url, key);
    }

    onMount(() => {
        let temp_key = localStorage.getItem("key");
        let temp_url = localStorage.getItem("url");

        if (temp_key !== null || temp_key !== undefined)
            key = temp_key as string;

        if (temp_url !== null || temp_url !== undefined)
            url = temp_url as string;
    });
</script>

<div class="bg-surface-600 h-64 w-[35rem] p-5 rounded-2xl">
    <input
        class="input variant-form-material"
        placeholder="URL"
        type="url"
        bind:value={url}
    />
    <input
        class="input variant-form-material my-8"
        placeholder="Key"
        type="text"
        bind:value={key}
    />
    <div class="flex justify-end">
        <button
            type="button"
            on:click={(e) => save()}
            class="mb-2 btn variant-filled-success text-xs mt-10"
        >
            Salvar
        </button>
    </div>
</div>

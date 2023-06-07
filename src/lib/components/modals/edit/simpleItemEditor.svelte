<script lang="ts">
    import type { SimpleItem } from "$lib/scripts/types";
    import { modalStore } from "@skeletonlabs/skeleton";

    const item = $modalStore[0].meta?.info as SimpleItem;
</script>

<div class="bg-surface-600 w-[35rem] p-5 rounded-2xl">
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
    </form>
</div>

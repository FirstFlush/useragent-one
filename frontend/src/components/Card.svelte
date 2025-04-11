<script lang="ts">
    export let title: string = '';
    export let className: string = '';
</script>

<div class={`bg-black/75 rounded-xl shadow-lg p-6 ${className}`}>
    {#if title}
        <h2 class="text-xl font-semibold mb-4">{title}</h2>
    {/if}
    <slot />
</div>

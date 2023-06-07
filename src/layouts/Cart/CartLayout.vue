<template>
    <main class="CartLayout" :class="$attrs.class">
        <slot />
    </main>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .CartLayout{
        display: grid;
        grid-template-columns: 1fr 25rem;
        grid-auto-rows: auto;
        gap: .3125rem;
        max-width: 87.5rem;
        min-height: 95vh;
        margin: auto;
        background-color: transparent;
        padding: var(--pad);
    }
</style>
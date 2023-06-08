<template>
    <main class="ProductsCard">
        <slot />
    </main>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .ProductsCard{
        max-width: 106.25rem;
        margin: auto;
        background-color: transparent;
        padding: 5.625rem var(--pad) var(--pad) var(--pad);
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
        grid-auto-rows: auto;
        gap: .625rem;
    }
</style>
<template>
    <main class="ProductsCard">
        <slot />
    </main>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .ProductsCard{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
        grid-auto-rows: auto;
        gap: .625rem;
        background-color: transparent;
    }
</style>
<template>
    <div class="CardWrapper">
        <slot />
    </div>  
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .CardWrapper{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-auto-rows: auto;
        gap: 1.25rem;
        padding: var(--pad);
        @media screen and (max-width: 800px) {
            gap: .625rem;
        }
    }
</style>
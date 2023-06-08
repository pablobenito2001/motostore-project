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
        grid-template-columns: 1fr 30%;
        grid-auto-rows: auto;
        gap: .3125rem;
        max-width: 87.5rem;
        min-height: 95vh;
        margin: auto;
        background-color: transparent;
        padding: 5.625rem var(--pad) var(--pad) var(--pad);
        @media screen and (max-width: 850px){
            grid-template-columns: 1fr;
            grid-template-rows: min-content;
        }
    }
</style>
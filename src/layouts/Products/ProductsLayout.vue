<template>
    <div class="ProductsLayout">
        <div>
            <slot name="filters"/>
        </div>
        <div>
            <slot name="content"/>
        </div>
    </div>
</template>
<script lang='ts' setup>
    
</script>   
<style lang='scss' scoped>
    .ProductsLayout{
        display: grid;
        grid-template-columns: minmax(20%, 25rem) 1fr;
        grid-auto-rows: 100vh;
        gap: .9375rem;
        max-width: var(--max-width);
        margin: auto;
        padding: 5.3125rem var(--pad) var(--pad) var(--pad);
        @media screen and (max-width: 850px){
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
        }
    }
</style>
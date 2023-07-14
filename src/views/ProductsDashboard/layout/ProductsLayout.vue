<template>
    <div class="ProductsLayout">
        <div class="ProductsLayout-container">
            <div>
                <slot name="filters"/>
            </div>
            <div>
                <slot name="content"/>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    
</script>   
<style lang='scss' scoped>
    .ProductsLayout{
        width: 100%;
        background-color: var(--grey);
        &-container{
            display: grid;
            grid-template-columns: minmax(20%, 25rem) 1fr;
            grid-auto-rows: auto;
            gap: .9375rem;
            min-height: 100vh;
            max-width: var(--full-width);
            margin: auto;
            padding: 6.25rem var(--pad) var(--pad) var(--pad);
            @media screen and (max-width: 850px){
                grid-template-columns: 1fr;
                grid-auto-rows: auto;
            }
        }
    }
</style>
<template>
    <div class="ProductLayout">
        <slot />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .ProductLayout{
        max-width: 87.5rem;
        margin: auto;
        background-color: var(--white);
        padding: var(--pad);
        &-container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: auto;
            gap: .625rem;
            background-color: transparent;
            @media screen and (max-width: 850px){
                grid-template-columns: 1fr;
            }
        }
    }
</style>
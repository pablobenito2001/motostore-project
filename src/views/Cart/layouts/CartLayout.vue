<template>
    <main class="CartLayout" :class="$attrs.class">
        <div>
            <slot name="Cart"/>
        </div>
        <div class="CartLayout-ticket">
            <slot name="Ticket"/>
        </div>
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
        margin: auto;
        &-ticket{
            position: relative;
        }
        @media screen and (max-width: 850px){
            grid-template-columns: 1fr;
            grid-template-rows: min-content;
        }
    }
</style>
<template>
    <div class="Ticked" :class="$attrs.class">
        <h4 class="Ticked-title">Completa tu Compra</h4>
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
    .Ticked{
        border: solid .125rem var(--black);
        border-radius: .3125rem;
        padding: 1.5625rem .625rem;       
        &-title{
            font-size: clamp(1.3em, 2vw,2em);
            font-weight: 600;
            line-height: 100%;
        }
    }
</style>
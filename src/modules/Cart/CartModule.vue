<template>
    <CartLayout>
        <div>
            <ShowCart />
        </div>
        <div class="CardModule">
            <Ticked class="CardModule-container"/>
        </div>
    </CartLayout>
</template>
<script lang='ts' setup>
    import CartLayout from '../../layouts/Cart/CartLayout.vue';
    import ShowCart from './ShowCart.vue';
    import Ticked from './Ticked.vue'
</script>
<style lang='scss' scoped>
    .CardModule{
        position: relative;
        &-container{
            position: sticky;
            top: .3125rem;
        }
    }
</style>
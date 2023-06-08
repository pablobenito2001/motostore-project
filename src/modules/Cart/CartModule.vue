<template>
    <EmptyCart  v-if="shopLength === 0"/>
    <CartLayout v-else>
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
    import Ticked from './Ticked.vue';
    import EmptyCart from '../../components/Cart/EmptyCart.vue';
    import { useShopCart } from '../../store/useShopcCart';
    import { storeToRefs } from 'pinia';

    const { shopLength } = storeToRefs(useShopCart());
</script>
<style lang='scss' scoped>
    .CardModule{
        position: relative;
        &-container{
            position: sticky;
            top: calc(5.5rem);
        }
    }
</style>
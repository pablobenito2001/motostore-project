<template>
    <NavModule  />
    <CenterLayout>
        <template v-if="shopLength === 0">
            <TitleGlobal>Carrito Vacio.</TitleGlobal>
            <GeneralButton class="EmptyCart-button" @click="() => router.push({ path: '/products' })">Ver productos.</GeneralButton>
        </template>
        <CartLayout v-else>
                <template #Cart>
                    <ShowCart />
                </template> 
                <template #Ticket>
                    <Ticked />
                </template>
        </CartLayout>
    </CenterLayout>
</template>
<script lang='ts' setup>
    import NavModule from '../../modules/Nav/NavModule.vue';
    import CenterLayout from '../../layouts/Global/CenterLayout.vue';
    import TitleGlobal from '../../layouts/Global/TitleGlobal.vue';
    import GeneralButton from '../../components/Buttons/GeneralButton.vue';
    import CartLayout from './layouts/CartLayout.vue';
    import ShowCart from './modules/ShowCart.vue';
    import Ticked from './modules/Ticked.vue';
    import { router } from '../../router/router';
    import { useShopCart } from '../../store/useShopcCart';
    import { storeToRefs } from 'pinia';

    const { shopLength } = storeToRefs(useShopCart());
</script>
<style lang='scss' scoped>
</style>
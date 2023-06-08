<template>
    <LayoutGlobal>
        <TitleGlobal>Carrito Vacio.</TitleGlobal>
        <GeneralButton class="EmptyCart-button" @click="() => router.push({ path: '/products' })">Ver productos.</GeneralButton>
    </LayoutGlobal>
</template>
<script lang='ts' setup>
    import TitleGlobal from '../../layouts/Global/TitleGlobal.vue';
    import GeneralButton from '../Buttons/GeneralButton.vue';
    import LayoutGlobal from '../../layouts/Global/LayoutGlobal.vue';
    import { router } from '../../router/router';
</script>
<style lang='scss' scoped>
    .EmptyCart{
        &-button{
            margin: 0 10px 0 10px;
        }
    }
</style>
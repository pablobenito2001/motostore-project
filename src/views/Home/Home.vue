<template>
    <NavModule />
    <MaxLayout class="Home">
        <HeaderModule />
        <NewPhonesModule />
        <ProductsModule />
    </MaxLayout>
    <Footer />
</template>
<script lang='ts' setup>
    import NavModule from '../../modules/Nav/NavModule.vue';
    import MaxLayout from '../../layouts/Global/MaxLayout.vue';
    import HeaderModule from './modules/HeaderModule.vue';
    import NewPhonesModule from './modules/NewPhonesModule.vue';
    import ProductsModule from './modules/ProductsModule.vue';
    import Footer from '../../modules/Footer/Footer.vue';
</script>
<style lang='scss' scoped>
    .Home{
        padding: 4.75rem 0 0 0;
    }
</style>
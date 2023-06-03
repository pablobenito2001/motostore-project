<template>
    <main class="Home">
        <HeaderModule />
        <CardModule />
        <Suspense>
            <NewPhonesModule />
            <template #fallback><span class="SD">Loading</span></template>
        </Suspense>
        <ProductsHomeModule />
    </main>
</template>
<script lang='ts' setup>
    import HeaderModule from './HeaderModule.vue';
    import CardModule from './CardModule.vue';
    import NewPhonesModule from './NewPhonesModule.vue';
    import ProductsHomeModule from './ProductsHomeModule.vue';
    import Loader from '../../components/Loader/Loader.vue';
</script>
<style lang='scss' scoped>
    .Home{
        padding: 4.75rem 0 0 0;
    }

    .SD{
        font-size: 2em;
        color: var(--blue);
    }
</style>
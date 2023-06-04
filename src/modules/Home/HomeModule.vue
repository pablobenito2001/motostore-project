<template>
    <main class="Home">
        <HeaderModule />
        <Suspense>
            <NewPhonesModule />
            <template #fallback>
                <LoaderSections />
            </template>
        </Suspense>
        <ProductsHomeModule />
        <CardModule />
    </main>
</template>
<script lang='ts' setup>
    import HeaderModule from './HeaderModule.vue';
    import CardModule from './CardModule.vue';
    import NewPhonesModule from './NewPhonesModule.vue';
    import ProductsHomeModule from './ProductsHomeModule.vue';
    import LoaderSections from '../../components/Loader/LoaderSections.vue';
</script>
<style lang='scss' scoped>
    .Home{
        padding: 4.75rem 0 0 0;
    }
</style>
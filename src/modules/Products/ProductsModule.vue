<template>
    <ProductsFilters />
    <Suspense>
        <ProductsCardWrapper />
        <template #fallback>
            <LoaderSections />
        </template> 
    </Suspense>
</template>
<script lang='ts' setup>
    import ProductsFilters from './ProductsFilters.vue';
    import ProductsCardWrapper from './ProductsCardWrapper.vue';
    import LoaderSections from '../../components/Loader/LoaderSections.vue';
</script>
<style lang='scss' scoped>

</style>
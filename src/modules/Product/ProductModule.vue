<template>
    <main class="ProductView">
        <ProductLayout>
            <Suspense>
                <ProductBuy />
                <template #fallback><LoaderSections /></template>
            </Suspense>
        </ProductLayout>
    </main>
</template>
<script lang="ts" setup>
    import ProductBuy from './ProductBuy.vue'
    import LoaderSections from '../../components/Loader/LoaderSections.vue';
    import ProductLayout from '../../layouts/Product/ProducLayout.vue';
</script>
<style lang="scss" scoped>
    .ProductView{
        padding: 4.75rem 0 0 0;
    }
</style>
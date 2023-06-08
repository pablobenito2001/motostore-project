<template>
    <ProductsCardLayout>
        <ProductsCard 
        v-for="(item, index) in products"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :picture="item.picture"
        :price="item.price"
        :family="item.family"
        :code-name="item.codeName"
        :resume="item.resume"
        />
    </ProductsCardLayout>
</template>
<script lang='ts' setup>
    import ProductsCardLayout from '../../layouts/Products/ProductsCardLayout.vue';
    import ProductsCard from '../../components/Products/ProductsCard.vue';
    import TitleGlobal from '../../layouts/Global/TitleGlobal.vue';
    import { useProductsAdapter } from '../../composables/useProductsAdapter';
    import { Ref } from 'vue';
    import Products from '../../insterfaces/Products';

    const products: Ref<Products[]> = await useProductsAdapter('products');
</script>
<style lang='scss' scoped>

</style>
<template>
    <ProductsCardLayout>
        <ProductCard 
        v-for="(item, index) in some"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :picture="item.thumbnail"
        :price="item.price"
        :family="item.family"
        :code-name="item.codeName"
        :resume="item.resume"
        />
    </ProductsCardLayout>
</template>
<script lang='ts' setup>
    import ProductCard from '../components/ProductCard.vue';
    import ProductsCardLayout from '../layout/ProductsCardLayout.vue';
    import { ProductAPICardView } from '../../../insterfaces/Product';

    interface Props{
        some: ProductAPICardView[]
    }
    
    const props = defineProps<Props>()
</script>
<style lang='scss' scoped>

</style>
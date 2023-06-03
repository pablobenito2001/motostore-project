<template>
    <ProductSlider 
    source="/img/edge_family.png" 
    color="rgba(63, 138, 252, 0.55)" 
    :products="gFamilyList">
        <h4 class="ProductSlider-title">Familia<br><span class="ProductSlider-strong">edge</span></h4>
    </ProductSlider>
</template>
<script lang='ts' setup>
    import { computed } from 'vue';
    import MiniProduct from '../../../insterfaces/MiniProduct';

    import ProductSlider from '../../../components/Cards/ProductSlider.vue';
    import { useMiniProductAdapter } from '../../../composables/useMiniProductAdapter';

    const ProductList = await useMiniProductAdapter('products');

    const gFamilyList = computed<MiniProduct[]>(() => {
        return ProductList.value.filter(((elem: MiniProduct) => elem.family === 'edge'))
    })
</script>
<style lang='scss' scoped>

</style>
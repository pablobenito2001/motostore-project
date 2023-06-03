<template>
    <ProductSlider 
    source="/img/moto_g_family.png" 
    color="rgba(35, 244, 93, 0.31)" 
    :products="gFamilyList">
        <h4 class="ProductSlider-title">Familia<br><span class="ProductSlider-strong">moto</span> g</h4>
    </ProductSlider>
</template>
<script lang='ts' setup>
    import { computed } from 'vue';
    import MiniProduct from '../../../insterfaces/MiniProduct';

    import ProductSlider from '../../../components/Cards/ProductSlider.vue';
    import { useMiniProductAdapter } from '../../../composables/useMiniProductAdapter';

    const ProductList = await useMiniProductAdapter('products');

    const gFamilyList = computed<MiniProduct[]>(() => {
        return ProductList.value.filter(((elem: MiniProduct) => elem.family === 'motog'))
    })
</script>
<style lang='scss' scoped>

</style>
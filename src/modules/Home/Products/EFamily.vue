<template>
    <ProductSlider 
    source="/img/moto_e_family.png" 
    color="rgba(249, 139, 9, 0.5)" 
    :products="gFamilyList">
        <h4 class="ProductSlider-title">Familia<br><span class="ProductSlider-strong">moto</span> e</h4>
    </ProductSlider>
</template>
<script lang='ts' setup>
    import { computed } from 'vue';
    import MiniProduct from '../../../insterfaces/MiniProduct';

    import ProductSlider from '../../../components/Cards/ProductSlider.vue';
    import { useMiniProductAdapter } from '../../../composables/useMiniProductAdapter';

    const ProductList = await useMiniProductAdapter('products');

    const gFamilyList = computed<MiniProduct[]>(() => {
        return ProductList.value.filter(((elem: MiniProduct) => elem.family === 'motoe'))
    })
</script>
<style lang='scss' scoped>

</style>
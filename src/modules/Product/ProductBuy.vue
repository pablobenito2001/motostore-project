<template>
    <GridLayout>
        <ImagesSlider :pictures="data.pictures"/>
    </GridLayout>
</template>
<script lang='ts' setup>
    import { Ref } from 'vue';

    import Product from '../../insterfaces/Product';
    import { useProductAdapter } from '../../composables/useProductAdapter';
    import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';   

    import GridLayout from '../../layouts/Product/GridLayout.vue';
    import ImagesSlider from '../../components/Product/ImagesSlider.vue';

    const route: RouteLocationNormalizedLoaded = useRoute()
    const data: Ref<Product> = await useProductAdapter('products', route.params.product as string);
</script>
<style lang='scss' scoped>

</style>
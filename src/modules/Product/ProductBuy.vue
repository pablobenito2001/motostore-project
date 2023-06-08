<template>
    <GridLayout>
        <div class="Buy">
            <ImagesSlider :pictures="data.pictures" class="Buy-stiky"/>
        </div>
        <DispatchClient :name="data.name" :price="data.price" :selects="data.selects" :extras="data.extras" :resume="data.resume" :thumbnail="data.thumbnail" :code-name="data.codeName"/>
    </GridLayout>
</template>
<script lang='ts' setup>
    import { Ref } from 'vue';

    import Product from '../../insterfaces/Product';
    import { useProductAdapter } from '../../composables/useProductAdapter';
    import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';   

    import GridLayout from '../../layouts/Product/GridLayout.vue';
    import ImagesSlider from '../../components/Product/ImagesSlider.vue';
    import DispatchClient from '../../components/Product/DispatchClient.vue';

    const route: RouteLocationNormalizedLoaded = useRoute()
    const data: Ref<Product> = await useProductAdapter('products', route.params.product as string);
</script>
<style lang='scss' scoped>
    .Buy{
        position: relative;
        &-stiky{
            position: sticky;
            top: 5rem;
        }
    }
</style>
<template>
    <TitleGlobal>productos</TitleGlobal>
    <ErrorShow v-if="error" :message="error.message" :cause="error.cause"/>
    <LoaderSections v-else-if="!loading">Loading</LoaderSections>
    <ColumnLayout class="Products" v-else>
        <!-- g family -->
        <ProductSlider 
        source="/img/moto_g_family.png"
        color="rgba(35, 244, 93, 0.5)"  
        :products="familyG">
            <h4 class="ProductSlider-title">Familia<br><span class="ProductSlider-strong">moto</span> g</h4>
        </ProductSlider>
        <!-- e family -->
        <ProductSlider 
        source="/img/moto_e_family.png" 
        color="rgba(249, 139, 9, 0.5)" 
        :products="familyE">
            <h4 class="ProductSlider-title">Familia<br><span class="ProductSlider-strong">moto</span> e</h4>
        </ProductSlider>
        <!-- edge family -->
        <ProductSlider 
        source="/img/edge_family.png" 
        color="rgba(63, 138, 252, 0.5)"  
        :products="familyEdge">
            <h4 class="ProductSlider-title">Familia<br><span class="ProductSlider-strong">edge</span></h4>
        </ProductSlider>
    </ColumnLayout>
</template>
<script lang='ts' setup>
    import { computed } from 'vue';
    import TitleGlobal from '../../layouts/Global/TitleGlobal.vue';
    import ColumnLayout from '../../layouts/Home/ColumnLayout.vue';
    import ProductSlider from '../../components/Cards/ProductSlider.vue';
    import LoaderSections from '../../components/Loader/LoaderSections.vue';
    import ErrorShow from '../../components/Error/ErrorShow.vue';
    import { useGetProducts } from '../../composables/useGetProducts';
    import { ProductAPICardView } from '../../insterfaces/Product';

    const { data, error, loading } = useGetProducts();

    // computed properties
    const familyE = computed<typeof data.value>(() => data.value.filter((elem: ProductAPICardView) => elem.family === 'motoe'));
    const familyG = computed<typeof data.value>(() => data.value.filter((elem: ProductAPICardView) => elem.family === 'motog'));
    const familyEdge = computed<typeof data.value>(() => data.value.filter((elem: ProductAPICardView) => elem.family === 'edge'));
</script>
<style lang='scss' scoped>
    .Products{
        @media screen and (max-width: 850px){
            padding: 2.1875rem 0;
        }
    }
</style>
<template>
    <main class="ProductView">
        <ErrorShow v-if="error" :message="error.message" :cause="error.cause"/>
        <LoaderSections v-else-if="!loading" />
        <ProductLayout v-else>
            <div class="Buy">
                <ImagesSlider 
                :pictures="data.pictures" 
                class="Buy-stiky"/>
            </div>
            <DispatchClient 
            :name="data.name" 
            :price="data.price" 
            :selects="data.selects" 
            :extras="data.extra" 
            :thumbnail="data.thumbnail"
            :resume="data.resume" 
            :code-name="data.codeName"/>
        </ProductLayout>
    </main>
</template>
<script lang="ts" setup>
    import LoaderSections from '../../components/Loader/LoaderSections.vue';
    import ProductLayout from '../../layouts/Product/ProducLayout.vue';
    import ErrorShow from '../../components/Error/ErrorShow.vue';
    import DispatchClient from '../../components/Product/DispatchClient.vue';
    import ImagesSlider from '../../components/Product/ImagesSlider.vue';
    import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
    import { useGetProduct } from '../../composables/useGetProducts';
    
    const route: RouteLocationNormalizedLoaded = useRoute();

    const { data, error, loading } = useGetProduct(route.params.product as string);
</script>
<style lang="scss" scoped>
    .ProductView{
        padding: 4.75rem 0 0 0;
    }
    .Buy-stiky{
        padding: 5rem 0 0 0;
        position: sticky;
        top: 0;
        left: 0;
    }
</style>
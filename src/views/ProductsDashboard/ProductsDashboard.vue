<template>
    <NavModule />
    <ProductsLayout>
        <template #filters>
            <ProductsFilters 
            v-model:name="nameKey" 
            v-model:family="familyKey" 
            v-model:type="typeKey"
            v-model:min-price="minPrice"
            v-model:max-price="maxPrice"/>
        </template>
        <template #content>
            <ErrorShow 
            v-if="error" 
            :message="error.message" 
            :cause="error.cause"/>
            <LoaderSections v-else-if="!loading"/>
            <template v-else>
                <ErrorShow v-if="dataFiltered.length === 0" message="No se encontraron productos."/>
                <ProductsCardWrapper v-else :some="dataFiltered"/>
            </template>
        </template>
    </ProductsLayout>
</template>
<script lang='ts' setup>
    import NavModule from '../../modules/Nav/NavModule.vue';
    import { ref, computed } from 'vue';
    import ProductsLayout from './layout/ProductsLayout.vue';
    import ProductsFilters from './modules/ProductsFilters.vue';
    import ProductsCardWrapper from './modules/ProductsCardWrapper.vue';
    import LoaderSections from '../../components/Loader/LoaderSections.vue';
    import ErrorShow from '../../components/Error/ErrorShow.vue';
    import { useGetProducts } from '../../composables/useGetProducts';
    import { ProductAPICardView } from '../../insterfaces/Product';

    const { data, error, loading } = useGetProducts();
    const nameKey = ref<string>('');
    const familyKey = ref<string>('all');
    const typeKey = ref<string>('all');
    const minPrice = ref<number>(0);
    const maxPrice = ref<number>(500000);

    const dataFiltered = computed<ProductAPICardView[]>(() => {
        let result: ProductAPICardView[];
        result = data.value.filter((elem: ProductAPICardView) => elem.name.toLocaleLowerCase().includes(nameKey.value));
        if(familyKey.value !== 'all') result = result.filter((elem: ProductAPICardView) => elem.family === familyKey.value);
        if(typeKey.value !== 'all') result = result.filter((elem: ProductAPICardView) => elem.type === typeKey.value);
        if(maxPrice.value !== 0) result = result.filter((elem: ProductAPICardView) => elem.price >= minPrice.value && elem.price <= maxPrice.value);

        return result;
    });
</script>
<style lang='scss' scoped>

</style>
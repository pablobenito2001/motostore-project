<template>
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
            <span v-if="error">{{ error.message }}</span>
            <LoaderSections v-else-if="!loading"/>
            <template v-else>
                <span v-if="dataFiltered.length === 0">No se encontraron productos.</span>
                <ProductsCardWrapper v-else :some="dataFiltered"/>
            </template>
        </template>
    </ProductsLayout>
</template>
<script lang='ts' setup>
    import { ref, computed } from 'vue';
    import ProductsLayout from '../../layouts/Products/ProductsLayout.vue';
    import ProductsFilters from './ProductsFilters.vue';
    import ProductsCardWrapper from './ProductsCardWrapper.vue';
    import LoaderSections from '../../components/Loader/LoaderSections.vue';
    import { useGetProducts } from '../../composables/useGetProducts';
    import { ProductAPI, ProductAPICardView } from '../../insterfaces/Product';

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
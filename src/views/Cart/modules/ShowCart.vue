<template>
    <ColumnLayout class="ShowCart">
        <CardProductCart 
        v-for="item in shop"
        :key="item.id"
        :price="item.finalPrice"
        :name="item.productName"
        :thumbnail="item.thumbnail"
        :amount="item.amount"
        :code-name="item.codeName"
        :id="item.id"
        />
    </ColumnLayout>
</template>
<script lang='ts' setup>
    import ColumnLayout from '../../../layouts/Global/ColumnLayout.vue';
    import CardProductCart from '../components/CardProductCart.vue';

    import { useShopCart } from '../../../store/useShopcCart';

    const { shop } = useShopCart();
</script>
<style lang='scss' scoped>
    .ShowCart{
        padding: 0;
        gap: 5px;
    }
</style>
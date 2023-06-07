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
        />
    </ColumnLayout>
</template>
<script lang='ts' setup>
    import ColumnLayout from '../../layouts/Home/ColumnLayout.vue';
    import CardProductCart from '../../components/Cart/CardProductCart.vue';    

    import { useShopCart } from '../../store/useShopcCart';

    const { shop } = useShopCart();
</script>
<style lang='scss' scoped>
    .ShowCart{
        padding: 0;
        gap: 5px;
    }
</style>
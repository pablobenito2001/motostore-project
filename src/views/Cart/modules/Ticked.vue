<template>
    <div class="Ticked" :class="$attrs.class">
        <h4 class="Ticked-title">Completa tu Compra</h4>
        <ul class="Ticked-productBox">
            <span class="Ticked-subtitle">Productos:</span>
            <li
            v-for="item in shop"
            :key="item.id"
            class="Ticked-product"
            >
                {{ item.productName }}<span class="Ticked-amount"> x {{ item.amount }}</span>
            </li>
        </ul>
        <div>
            <span class="Ticked-subtitle">Precio Total:</span>
            <span class="Ticked-price">${{ humanizedFunction }},00</span>
        </div>
        <GeneralButton class="Ticked-button">PAGAR</GeneralButton>
    </div>
</template>
<script lang='ts' setup>
    import { storeToRefs } from 'pinia';
    import GeneralButton from '../../../components/Buttons/GeneralButton.vue';
    import { useShopCart } from '../../../store/useShopcCart';
    import { useHumanizedPrice } from '../../../composables/useHumanizedPrice';

    const { shop, finalPrice } = storeToRefs(useShopCart());
    const { humanizedFunction } = useHumanizedPrice(finalPrice);
</script>
<style lang='scss' scoped>
    .Ticked{
        display: flex;
        flex-direction: column;
        gap: .9375rem;
        border: solid 2px var(--black);
        border-radius: 5px;
        padding: 25px 10px;       
        position: sticky;
        top: 5.5rem;    
        &-title{
            font-size: clamp(2em, 2vw, 2em);
            font-weight: 600;
            line-height: 100%;
        }
        &-subtitle{
            display: block;
            font-size: 1.3em;
            font-weight: 600;
            line-height: 100%;
        }
        &-product{
            display: block;
            font-weight: lighter;
            font-size: 1.1em;
            font-family: var(--secundary-font);
            margin: .3125rem 0;
        }
        &-price{
            font-size: clamp(2em, 3vw,3em);
            font-weight: 600;
            line-height: 100%;
        }
        &-button{
            width: 100%;
        }
        &-amount{
            font-weight: 600;
        }
    }
</style>
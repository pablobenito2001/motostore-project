import { defineStore } from "pinia";
import { ref, computed, Ref, ComputedRef, watch } from 'vue';
import FinalProduct from "../insterfaces/FinalProduct";
import LocalStorage from "../services/LocalStorage";

export const useShopCart = defineStore('cart', () => {
    const shop: Ref<FinalProduct[]> = ref<FinalProduct[]>([]);
    shop.value = LocalStorage.getLocalStorage<FinalProduct[]>('shop') as FinalProduct[];

    const finalPrice = computed<number>(() => shop.value.reduce((acum: number, elem: FinalProduct) => acum + elem.finalPrice * elem.amount, 0))
    const shopLength = computed<number>(() => shop.value.length)

    function addProduct(value: FinalProduct[]): void{
        shop.value.push(...value);
    }
    function deleteProduct(id: number): void{
        const index: number = shop.value.findIndex((elem: FinalProduct) => elem.id === id);
        shop.value.splice(index, 1);
    }
    function incrementAmount(id: number, increment: number): void{
        const element = shop.value.find((elem: FinalProduct) => elem.id === id) as FinalProduct;
        if(element.amount + increment > 0 && element.amount + increment < 6) element.amount += increment;

    }

    watch(() => shop.value,
    () => {
        LocalStorage.setLocalStorage<FinalProduct[]>('shop', shop.value);
    },
    {
        deep: true
    })

    return {
        shop,
        shopLength,
        finalPrice,
        addProduct,
        deleteProduct,
        incrementAmount
    }
})
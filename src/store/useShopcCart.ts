import { defineStore } from "pinia";
import { ref, computed, Ref, ComputedRef, watch } from 'vue';
import FinalProduct from "../insterfaces/FinalProduct";
import LocalStorage from "../services/LocalStorage";

export const useShopCart = defineStore('cart', () => {
    const shop: Ref<FinalProduct[]> = ref<FinalProduct[]>([]);
    shop.value = LocalStorage.getLocalStorage<FinalProduct[]>('shop') as FinalProduct[];

    const shopLength: ComputedRef<number> = computed<number>(() => shop.value.length);

    function addProduct(value: FinalProduct[]){
        shop.value.push(...value);
    }

    watch(() => shop.value,
    () => {
        LocalStorage.setLocalStorage<FinalProduct[]>('shop', shop.value);
    },
    {
        deep: true
    })

    return {
        shop: computed(() => shop.value),
        shopLength,
        addProduct
    }
})
import { computed, ComputedRef, Ref, isRef } from "vue";

export const useHumanizedPrice = (rawPrice: Ref<number> | number) => {

    const humanizedFunction: ComputedRef<string> = computed<string>(() => {
        let priceArray: number[];   

        isRef(rawPrice) 
        ? priceArray = Array.from(String(rawPrice.value), Number).reverse()
        : priceArray = Array.from(String(rawPrice), Number).reverse();

        const humanizedPrice: string[] = [];
        priceArray.forEach((elem: number, index: number) => {        
            index % 3 === 0 && index !== 0 
            ? humanizedPrice.push('.', elem.toString())
            : humanizedPrice.push(elem.toString());
        });
        return humanizedPrice.reverse().join('');   
    })

    return {
        humanizedFunction
    }
}

import MiniProduct from "../insterfaces/MiniProduct";
import API from "../services/API";
import { ref } from 'vue'

export const useMiniProductAdapter = async (source: string) => {
    const ProductList = ref<MiniProduct[]>([]);
    try{
        const res: Awaited<any> = await API.fetchLocalData(source);
        res.forEach((elem: ReturnType<typeof res[0]>) => {   
            ProductList.value.push({
                id: elem.id,
                name: elem.name,
                price: elem.price,
                picture: elem.thumbnail,
                family: elem.family
            })
        })
    }catch(e){
        console.log(e);
        if (typeof e === "string") {
            throw e
        } else if (e instanceof Error) {
            throw e
        }
    }

    return ProductList;
}
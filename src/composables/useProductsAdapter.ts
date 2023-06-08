import Products from '../insterfaces/Products';
import API from "../services/API";
import { ref, Ref } from 'vue'

export const useProductsAdapter = async (source: string): Promise<Ref<Products[]>> => {
    const ProductList = ref<Products[]>([]);
    try{
        const res: Awaited<any> = await API.fetchLocalData(source);
        res.forEach((elem: ReturnType<typeof res[0]>) => {   
            ProductList.value.push({
                id: elem.id,
                name: elem.name,
                price: elem.price,
                picture: elem.thumbnail,
                family: elem.family,
                codeName: elem.codeName,
                resume: elem.resume
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
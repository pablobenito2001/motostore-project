import { ref, Ref } from 'vue';
import Product from '../insterfaces/Product';
import API from '../services/API';

export const useProductAdapter = async (source: string, phoneName: string): Promise<Ref<Product>> => {
    const dataAdap = ref<Product | null>(null) as Ref<Product>;

    try {
        const data: Awaited<any> = await API.fetchLocalData(source);        
        const phone = data.find((elem: ReturnType<typeof data[0]>) => elem.codeName === phoneName);
        dataAdap.value = {
            name: phone.name,
            price: phone.price,
            selects: phone.selects,
            specs: phone.specs,
            pictures: phone.pictures,
            extras: phone.extra,
            new: phone.new,
            resume: phone.resume,
            thumbnail: phone.thumbnail,
            codeName: phone.codeName
        };      
    }catch (e){
        console.log(e);
        if (typeof e === "string") {
            throw e
        } else if (e instanceof Error) {
            throw e
        }
    }

    return dataAdap;
}
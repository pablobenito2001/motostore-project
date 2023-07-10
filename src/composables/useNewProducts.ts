import { ResponseAPI } from "../insterfaces/ResponseAPI";
import { NewProneAPI } from "../insterfaces/NewProducts";
import API from "../services/API";
import { ref, Ref } from "vue"

export const useNewProducts = (): ResponseAPI<NewProneAPI[]> => {
    const data = ref<NewProneAPI[] | null>(null) as Ref<NewProneAPI[]>;
    const error = ref<Error | null>(null) as Ref<Error>;
    const loading = ref<boolean>(false);

    async function fetching(){
        try{
            loading.value = false;
            const res: Awaited<Response> = await API.fetchLocalData('newPhones');
            const rawData: Awaited<NewProneAPI[]> = await res.json();
            if(res.ok && res.status === 200){
                loading.value = true;
                data.value = rawData;
            }else{
                throw new Error('Something went wrong' + res.status + ' ' + res.statusText);
            }
        }catch(e){
            console.error(e);
            if(e instanceof Error){
                error.value = e
            }
        }   
    }
    fetching();

    return {
        data,
        error,
        loading,
        fetching
    }
}
import API from "../services/API"
import NewPhone from "../insterfaces/NewPhone"
import { ref, Ref } from "vue";

export const useNewPhonesAdapter = async (source: string): Promise<Ref<NewPhone[]>> => {
    const newPhone = ref<NewPhone[]>([]);
    try{
        const res: Awaited<any> = await API.fetchLocalData(source);
        res.forEach((elem: ReturnType<typeof res[0]>) => {   
            newPhone.value.push({
                title: elem.title,
                price: elem.price,
                caption: elem.text,
                picture: elem.picture,
                pictures: elem.pictures
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

    return newPhone;
}
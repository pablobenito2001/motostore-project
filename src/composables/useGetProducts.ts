import API from "../services/API";
import { ProductAPI, ProductAPICardView, ProductAPIProductView } from "../insterfaces/Product";
import { ResponseAPI } from "../insterfaces/ResponseAPI";
import { ref, Ref } from 'vue'

export const useGetProducts = (): ResponseAPI<ProductAPICardView[]> => {
    const ProductList = ref<ProductAPICardView[] | null>(null) as Ref<ProductAPICardView[]>;
    const error = ref<Error | null>(null) as Ref<Error>;
    const loading = ref<boolean>(false) as Ref<boolean>;

    async function getData(){
        loading.value = false;
        try{
            const res: Awaited<ProductAPI[]> = await API.fetchData();
            ProductList.value = res.map((elem: ProductAPI) => {
                const obj: ProductAPICardView = {
                    name: elem.info.name,
                    id: elem.id,
                    price: elem.info.price,
                    codeName: elem.info.codeName,
                    family: elem.info.family,
                    thumbnail: elem.info.thumbnail,
                    type: elem.info.type,
                    resume: elem.info.resume
                };
                return obj;
            });
            loading.value = true;
        }catch(e){
            console.error(e);
            if(e instanceof Error) error.value = e;
        }
    }
    getData();

    return {
        data: ProductList,
        error: error,
        loading: loading,
        fetching: getData
    };
}

export const useGetProduct = (name: string): ResponseAPI<ProductAPIProductView> => {
    const Product = ref<ProductAPIProductView | null>(null) as Ref<ProductAPIProductView>;
    const error = ref<Error | null>(null) as Ref<Error>;
    const loading = ref<boolean>(false) as Ref<boolean>;

    async function getData(name: string){
        loading.value = false;
        try{
            const res: Awaited<ProductAPI[]> = await API.fetchData();
            const product: ProductAPI | undefined = res.find((elem: ProductAPI) => elem.info.codeName === name.toLocaleLowerCase());
            if(product){
                Product.value = {
                    name: product.info.name,
                    id: product.id,
                    codeName: product.info.codeName,
                    price: product.info.price,
                    selects: product.selects,
                    type: product.info.type,
                    family: product.info.family,
                    resume: product.info.resume,
                    specs: product.specs,
                    pictures: product.pictures,
                    extra: product.extra,
                    thumbnail: product.info.thumbnail,
                    new: product.new
                };
                loading.value = true;
            }else{
                throw new Error(`El producto ${name}, no existe.`);
            }
        }catch(e){
            console.error(e);
            if(e instanceof Error) error.value = e;
        }
    }
    getData(name);

    return {
        data: Product,
        error: error,
        loading: loading,
        fetching: getData
    };
}
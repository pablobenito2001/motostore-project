import { ProductAPI } from './../insterfaces/Product';

export default {
    fetchLocalData: (source: string): Promise<Response> => {
        return fetch(`/data/${ source }.json`);
    },
    fetchData: (): Promise<ProductAPI[]> => {
        return fetch(`/data/products.json`)
        .then((json: Response) => {
            if(json.ok && json.status === 200) return json.json()
            else throw new Error("Something went wrong trying to connect to the database", { cause: `${ json.status } ${json.statusText}` });
        })
        .then((res: ProductAPI[]) => res)
    }
}
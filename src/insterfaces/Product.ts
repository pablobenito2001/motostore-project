import SpecsProduct from "./SpectsProduct";

export default interface Product{
    name: string;
    price: number | boolean;
    selects: { colors: string[], storage: string[] };
    specs: SpecsProduct;
    pictures: string[];
    new: boolean;
}
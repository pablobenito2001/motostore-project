import SpecsProduct from "./SpectsProduct";

export default interface Product{
    name: string;
    price: number;
    selects: { colors: string[], storage: string[] };
    specs: SpecsProduct;
    pictures: string[];
    extras: { name: string, codeName: string, price: number, source: string }[];
    new: boolean;
    resume: string;
    thumbnail: string;
    codeName: string;
}
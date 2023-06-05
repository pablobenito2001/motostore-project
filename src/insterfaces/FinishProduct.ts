export default interface FinishProduct{
    productName: string;
    finalPrice: number;
    extraProducts: { name: string }[];
}
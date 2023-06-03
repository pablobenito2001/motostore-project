export default interface NewPhone {
    title: string;
    price: boolean | number;
    caption: string;
    picture: string;
    pictures: { media: string, source: string }[];
}
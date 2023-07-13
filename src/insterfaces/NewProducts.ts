export interface NewProne{
    title: string;
    text: string;
    price: number | boolean,
    picture: string,
    pictures: NewPhoneMediaPictures[];
    codename: string;
}

export interface NewPhoneMediaPictures{
       media: number;
       source: string;
}
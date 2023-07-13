export interface NewProneAPI{
    title: string;
    text: string;
    price: boolean,
    picture: string,
    pictures: NewPhoneAPIMediaPictures[];
    codename: string;
}

export interface NewPhoneAPIMediaPictures{
       media: number;
       source: string;
}
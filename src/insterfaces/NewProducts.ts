export interface NewProneAPI{
    title: string;
    text: string;
    price: boolean,
    picture: string,
    pictures: NewPhoneAPIMediaPictures[];
}

export interface NewPhoneAPIMediaPictures{
       media: number;
       source: string;
}
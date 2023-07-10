export interface ProductAPI{
    id: number;
    info: ProductAPIInfo;
    selects: ProductAPISelect;
    specs: ProductAPISpecs;
    pictures: string[];
    extra: ProductAPIExtraProduct[];
    new: boolean;
}

export interface ProductAPIInfo{
    name: string;
    codeName: string,
    price: number;
    thumbnail: string;
    type: string;
    family: string,
    resume: string
}

export interface ProductAPISelect{
    colors: string[],
    storage: string[]
}

export interface ProductAPISpecs{
    general: {
        sistema_operativo: string,
        dimenciones: string,
        peso: string,
        sensores: string
    };
    camara: {
        trasera: string,
        frontal: string
    };
    memoria: {
        ram: string
    };
    conectividad: {
        bluetooth: string,
        wifi: string,
        nfc: string
    };
    bateria: {
        capacidad_de_bateria: string
    };
}

export interface ProductAPIExtraProduct{
    name: string;
    price: number;
    source: string;
    codeName: string;
}

export interface ProductAPICardView extends ProductAPIInfo{
    id: number;
}

export interface ProductAPIProductView{
    name: string;
    codeName: string,
    price: number;
    type: string;
    family: string,
    resume: string,
    thumbnail: string,
    id: number;
    selects: ProductAPISelect;
    specs: ProductAPISpecs;
    pictures: string[];
    extra: ProductAPIExtraProduct[];
    new: boolean;
}
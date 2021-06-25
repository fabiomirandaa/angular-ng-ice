export enum IceCreamType {
    Sorbet = 'sorbet',
    Sorvete = 'sorvete'
}

export enum IceCreamCategory {
    Vegano = 'vegano',
    Tradicional = 'tradicional'
}

export interface IceCream {
    calories: number;
    category: IceCreamCategory;
    description: string;
    image: string;
    ingredients: string;
    name: string;
    price: number;
    quantity: number;
    type: IceCreamType;
}
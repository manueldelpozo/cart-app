import { Price } from './price';

export interface Product {
    id: number;
    name: string;
    img_thumbnail_base64: string;
    price: Price;
}

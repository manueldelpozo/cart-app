import { Price } from './price';

export interface Product {
    img_thumbnail_base64: string;
    name: string;
    price: Price;
}

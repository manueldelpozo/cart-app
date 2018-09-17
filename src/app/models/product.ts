import { Price } from './price';

export class Product {
    public id: number;
    public name: string;
    public img_thumbnail_base64: string;
    public price: Price;

    public updateFrom(src: Product): void {
        this.id = src.id;
        this.name = src.name;
        this.img_thumbnail_base64 = src.img_thumbnail_base64;
        this.price = src.price;
    }
}

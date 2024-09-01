import { Status } from "../enums/Status";
import ProductProps from "../interfaces/productProps";

export default abstract class Product implements ProductProps {
    productName: string;
    price: number;
    quantity: number;

    constructor(product: ProductProps) {
        this.productName = product.productName;
        this.price = product.price;
        this.quantity = product.quantity;
    }

    abstract displayDetails(): void;

    public isAvailable(): string {
        return this.quantity === 0 ? Status.Unavailable : Status.Available;
    }

    

    public getProductName(){
        return this.productName;
    }

    public setProductName(productName: string): void {
        this.productName = productName;
    }

    public getPrice(){
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getQuantity() {
        return this.quantity;
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }
}
import FurnitureProps from "../interfaces/furnitureProps";
import ProductProps from "../interfaces/productProps";
import Product from "./product";

export default class Furniture extends Product implements FurnitureProps{
    furnitureColor: string;

    constructor({
        productName,
        price,
        quantity,
        furnitureColor
    }: FurnitureProps & ProductProps) {
        super({productName,price,quantity});
        this.furnitureColor = furnitureColor;
    }

    public displayDetails(): void {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Cor: ${this.furnitureColor}`);
    }

  
    public getFurnitureColor() {
        return this.furnitureColor;
    }

    public setFurnitureColor(furnitureColor:string): void {
        this.furnitureColor = furnitureColor;
    }
}
import ProductProps from "../interfaces/productProps";
import ToyProps from "../interfaces/toyProps";
import Product from "./product";

export default class Toy extends Product implements ToyProps {
    material:string;  
    toyColor: string;

    constructor({
        productName,
        price,
        quantity,
        material,
        toyColor,
    }: ToyProps & ProductProps) {
        super({productName,price,quantity});
        this.material = material;
        this.toyColor = toyColor;
    }

    public displayDetails(): void {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`material do brinquedo: ${this.material}`);
        console.log(`Cor do brinquedo: ${this.toyColor}`);
    }

    public getMaterial() {
        return this.material;
    }

    public setMaterial(material: string): void {
        this.material = material;
    }

    public getToyColor() {
        return this.toyColor;
    }

    public setToyColor(toyColor: string): void {
        this.toyColor = toyColor;
    }
}
import PetshopProps from "../interfaces/petshopProps";
import ProductProps from "../interfaces/productProps";
import Product from "./product";

export default class Petshop extends Product implements PetshopProps {
    petColor: string;
    petType: string;

    constructor({
        productName,
        price,
        quantity,
        petColor,
        petType
    }: PetshopProps & ProductProps) {
        super({productName,price,quantity});
        this.petColor = petColor;
        this.petType = petType;
    }

    public displayDetails(): void {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Cor: ${this.petColor}`);
        console.log(`Tipo de animal: ${this.petType}`);

    }

    public getPetColor() {
        return this.petColor;
    }

    public setPetColor(petColor: string): void {
        this.petColor = petColor;
    }

    public getPetType() {
        return this.petType;
    }

    public setPetType(petType: string): void {
        this.petType = petType;
    }
}
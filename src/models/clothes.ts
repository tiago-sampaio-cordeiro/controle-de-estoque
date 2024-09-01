import ClothesProps from "../interfaces/clothesProps";
import ProductProps from "../interfaces/productProps";
import Product from "./product";

export default class Clothes extends Product implements ClothesProps {
    brand: string;
    size: string;
    clothesColor: string;
    tissue: string;

    constructor({
        productName,
        price,
        quantity,
        brand,
        size,
        clothesColor,
        tissue }: ClothesProps & ProductProps) {
        super({productName, price, quantity });
        this.brand = brand
        this.size = size;
        this.clothesColor = clothesColor;
        this.tissue = tissue;
    }


    public displayDetails(): void {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Tamanho: ${this.size}`);
        console.log(`Cor: ${this.clothesColor}`);
        console.log(`Tecido ${this.tissue}`);
    }

    public getSize() {
        return this.size;
    }

    public setSize(size: string): void {
        this.size = size;
    }

    public getClothesColor() {
        return this.clothesColor;
    }

    public setClothesColor(clothesColor: string): void {
        this.clothesColor = clothesColor;
    }

    public getTissue() {
        return this.tissue;
    }

    public setTissue(tissue: string): void {
        this.tissue = tissue;
    }
}
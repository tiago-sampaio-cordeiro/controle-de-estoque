import ElectronicProductProps from "../interfaces/electronicProductsProps";
import ProductProps from "../interfaces/productProps";
import Product from "./product";


export default class ElectronicProduct extends Product implements ElectronicProductProps {
    brand;
    voltage?;
    color;

    constructor({
        productName,
        price,
        quantity,
        brand,
        voltage,
        color }: ElectronicProductProps & ProductProps) {
        super({ productName, price, quantity });
        this.brand = brand;
        this.voltage = voltage;
        this.color = color;
    }

    public checkVoltage(): void {

        if (this.voltage === '') {
            console.log("Produto sem voltagem especificada")
        } else {
            console.log("produto com voltagem especificada")
        }

    }


    


    public displayDetails(): void {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Marca: ${this.brand}`);
        console.log(`Voltagem: ${this.voltage}`);
        console.log(`Cor: ${this.color}`);
    }



    public getBrand() {
        return this.brand;
    }

    public setBrand(model: string): void {
        this.brand = model;
    }

    public getVoltage() {
        return this.voltage;
    }

    public setVoltage(voltage: string): void {
        this.voltage = voltage;
    }

    public getColor() {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }
}
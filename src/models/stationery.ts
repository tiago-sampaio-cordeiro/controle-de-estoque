import ProductProps from "../interfaces/productProps";
import StationeryProps from "../interfaces/stationeryProps";
import Product from "./product";

export default class Stationery extends Product implements StationeryProps {
    stationeryBrand: string;

    constructor({
        productName,
        price,
        quantity,
        stationeryBrand
    }: StationeryProps & ProductProps) {
        super({productName,price,quantity});
        this.stationeryBrand = stationeryBrand
    }

    public displayDetails(): void {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Marca do produto: ${this.stationeryBrand}`);
    }

    public getStationeryBrand() {
        return this.stationeryBrand;
    }

    public setStationeryBrand(stationeryBrand: string): void {
        this.stationeryBrand = stationeryBrand
    }
}
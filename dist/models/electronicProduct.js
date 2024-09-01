"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
class ElectronicProduct extends product_1.default {
    constructor({ productName, price, quantity, brand, voltage, color }) {
        super({ productName, price, quantity });
        this.brand = brand;
        this.voltage = voltage;
        this.color = color;
    }
    checkVoltage() {
        if (this.voltage === '') {
            console.log("Produto sem voltagem especificada");
        }
        else {
            console.log("produto com voltagem especificada");
        }
    }
    displayDetails() {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Marca: ${this.brand}`);
        console.log(`Voltagem: ${this.voltage}`);
        console.log(`Cor: ${this.color}`);
    }
    getBrand() {
        return this.brand;
    }
    setBrand(model) {
        this.brand = model;
    }
    getVoltage() {
        return this.voltage;
    }
    setVoltage(voltage) {
        this.voltage = voltage;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
}
exports.default = ElectronicProduct;

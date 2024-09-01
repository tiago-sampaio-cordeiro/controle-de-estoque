"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
class Toy extends product_1.default {
    constructor({ productName, price, quantity, material, toyColor, }) {
        super({ productName, price, quantity });
        this.material = material;
        this.toyColor = toyColor;
    }
    displayDetails() {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`material do brinquedo: ${this.material}`);
        console.log(`Cor do brinquedo: ${this.toyColor}`);
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(material) {
        this.material = material;
    }
    getToyColor() {
        return this.toyColor;
    }
    setToyColor(toyColor) {
        this.toyColor = toyColor;
    }
}
exports.default = Toy;

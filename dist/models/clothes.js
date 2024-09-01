"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
class Clothes extends product_1.default {
    constructor({ productName, price, quantity, brand, size, clothesColor, tissue }) {
        super({ productName, price, quantity });
        this.brand = brand;
        this.size = size;
        this.clothesColor = clothesColor;
        this.tissue = tissue;
    }
    displayDetails() {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Tamanho: ${this.size}`);
        console.log(`Cor: ${this.clothesColor}`);
        console.log(`Tecido ${this.tissue}`);
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
    getClothesColor() {
        return this.clothesColor;
    }
    setClothesColor(clothesColor) {
        this.clothesColor = clothesColor;
    }
    getTissue() {
        return this.tissue;
    }
    setTissue(tissue) {
        this.tissue = tissue;
    }
}
exports.default = Clothes;

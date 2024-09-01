"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
class Furniture extends product_1.default {
    constructor({ productName, price, quantity, furnitureColor }) {
        super({ productName, price, quantity });
        this.furnitureColor = furnitureColor;
    }
    displayDetails() {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Cor: ${this.furnitureColor}`);
    }
    getFurnitureColor() {
        return this.furnitureColor;
    }
    setFurnitureColor(furnitureColor) {
        this.furnitureColor = furnitureColor;
    }
}
exports.default = Furniture;

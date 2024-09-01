"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
class Petshop extends product_1.default {
    constructor({ productName, price, quantity, petColor, petType }) {
        super({ productName, price, quantity });
        this.petColor = petColor;
        this.petType = petType;
    }
    displayDetails() {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Cor: ${this.petColor}`);
        console.log(`Tipo de animal: ${this.petType}`);
    }
    getPetColor() {
        return this.petColor;
    }
    setPetColor(petColor) {
        this.petColor = petColor;
    }
    getPetType() {
        return this.petType;
    }
    setPetType(petType) {
        this.petType = petType;
    }
}
exports.default = Petshop;

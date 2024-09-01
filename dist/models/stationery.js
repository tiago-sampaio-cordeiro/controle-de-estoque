"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
class Stationery extends product_1.default {
    constructor({ productName, price, quantity, stationeryBrand }) {
        super({ productName, price, quantity });
        this.stationeryBrand = stationeryBrand;
    }
    displayDetails() {
        console.log(`Nome: ${this.productName}`);
        console.log(`Preço: ${this.price}`);
        console.log(`Quantidade: ${this.quantity}`);
        console.log(`Marca do produto: ${this.stationeryBrand}`);
    }
    getStationeryBrand() {
        return this.stationeryBrand;
    }
    setStationeryBrand(stationeryBrand) {
        this.stationeryBrand = stationeryBrand;
    }
}
exports.default = Stationery;

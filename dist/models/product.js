"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Status_1 = require("../enums/Status");
class Product {
    constructor(product) {
        this.productName = product.productName;
        this.price = product.price;
        this.quantity = product.quantity;
    }
    isAvailable() {
        return this.quantity === 0 ? Status_1.Status.Unavailable : Status_1.Status.Available;
    }
    getProductName() {
        return this.productName;
    }
    setProductName(productName) {
        this.productName = productName;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
}
exports.default = Product;

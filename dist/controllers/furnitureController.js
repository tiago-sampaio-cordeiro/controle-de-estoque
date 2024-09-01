"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const furniture_1 = __importDefault(require("../models/furniture"));
class FurnitureController {
    constructor(apiURL) {
        this.prompt = (0, prompt_sync_1.default)();
        this.apiURL = apiURL;
    }
    async createFurniture(productName, price, quantity, furnitureColor) {
        let newFurniture = new furniture_1.default({
            productName,
            price,
            quantity,
            furnitureColor
        });
        try {
            const response = await fetch(`${this.apiURL}/furniture`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFurniture),
            });
            const furniture = await response.json();
            console.log('Produto cadastrado com sucesso', furniture);
            return newFurniture;
        }
        catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error;
        }
    }
    async listFurnitures() {
        try {
            const response = await fetch(`${this.apiURL}/furniture`);
            const furniture = await response.json();
            console.log('Móvel:', furniture);
        }
        catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }
    idUpdate() {
        let idProduct = this.prompt('Digite o id: ');
        return idProduct;
    }
    async getFurnitureById() {
        const id = this.idUpdate();
        try {
            const response = await fetch(`${this.apiURL}/furniture/${id}`);
            if (!response.ok) {
                throw new Error(`Movel com ID ${id} não encontrado.`);
            }
            const electronicProduct = await response.json();
            console.log(`Movel com o ID ${id} encontrado:`, electronicProduct);
        }
        catch (error) {
            console.error('Erro ao buscar Movel:', error);
        }
    }
}
exports.default = FurnitureController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const toys_1 = __importDefault(require("../models/toys"));
class ToyController {
    constructor(apiURL) {
        this.prompt = (0, prompt_sync_1.default)();
        this.apiURL = apiURL;
    }
    async createToy(productName, price, quantity, material, toyColor) {
        let newToy = new toys_1.default({
            productName,
            price,
            quantity,
            material,
            toyColor
        });
        try {
            const response = await fetch(`${this.apiURL}/toy`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newToy),
            });
            const toy = await response.json();
            console.log('Produto cadastrado com sucesso', toy);
            return newToy;
        }
        catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error;
        }
    }
    async listToys() {
        try {
            const response = await fetch(`${this.apiURL}/toy`);
            const toy = await response.json();
            console.log('Produtos Eletrônicos:', toy);
        }
        catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }
    idUpdate() {
        let idProduct = this.prompt('Digite o id: ');
        return idProduct;
    }
    async getToyById() {
        const id = this.idUpdate();
        try {
            const response = await fetch(`${this.apiURL}/toy/${id}`);
            if (!response.ok) {
                throw new Error(`Brinquedo com ID ${id} não encontrado.`);
            }
            const electronicProduct = await response.json();
            console.log(`Brinquedo com o ID ${id} encontrado:`, electronicProduct);
        }
        catch (error) {
            console.error('Erro ao buscar brinquedo:', error);
        }
    }
}
exports.default = ToyController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const petshop_1 = __importDefault(require("../models/petshop"));
class PetshopController {
    constructor(apiUrl) {
        this.prompt = (0, prompt_sync_1.default)();
        this.apiURL = apiUrl;
    }
    async createPetshop(productName, price, quantity, petColor, petType) {
        let newPetshop = new petshop_1.default({
            productName,
            price,
            quantity,
            petColor,
            petType
        });
        try {
            const response = await fetch(`${this.apiURL}/petshop`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPetshop)
            });
            const petshop = await response.json();
            console.log('Produto cadastrado com sucesso', petshop);
            return newPetshop;
        }
        catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error;
        }
    }
    async listPetShop() {
        try {
            const response = await fetch(`${this.apiURL}/petshop`);
            const petshop = await response.json();
            console.log('Produtos de petshop:', petshop);
        }
        catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }
    idUpdate() {
        let idProduct = this.prompt('Digite o id: ');
        return idProduct;
    }
    async getPetShopById() {
        const id = this.idUpdate();
        try {
            const response = await fetch(`${this.apiURL}/petshop/${id}`);
            if (!response.ok) {
                throw new Error(`Produto de petshop com ID ${id} não encontrado.`);
            }
            const electronicProduct = await response.json();
            console.log(`Produto de petshop com o ID ${id} encontrado:`, electronicProduct);
        }
        catch (error) {
            console.error('Erro ao buscar produto de petshop:', error);
        }
    }
}
exports.default = PetshopController;

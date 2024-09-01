"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const clothes_1 = __importDefault(require("../models/clothes"));
const node_fetch_1 = __importDefault(require("node-fetch"));
class ClothesController {
    constructor(apiURL) {
        this.prompt = (0, prompt_sync_1.default)();
        this.apiURL = apiURL;
    }
    async createClothes(productName, price, quantity, brand, size, clothesColor, tissue) {
        let newClothes = new clothes_1.default({
            productName,
            price,
            quantity,
            brand,
            size,
            clothesColor,
            tissue
        });
        try {
            const response = await (0, node_fetch_1.default)(`${this.apiURL}/clothes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newClothes),
            });
            const clothes = await response.json();
            console.log('Produto cadastrado com sucesso', clothes);
            return newClothes;
        }
        catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error;
        }
    }
    async listClothes() {
        try {
            const response = await (0, node_fetch_1.default)(`${this.apiURL}/clothes`);
            const clothes = await response.json();
            console.log('Roupas:', clothes);
        }
        catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }
    idUpdate() {
        let idProduct = this.prompt('Digite o id: ');
        return idProduct;
    }
    async getOutfitById() {
        const id = this.idUpdate();
        try {
            const response = await (0, node_fetch_1.default)(`${this.apiURL}/clothes/${id}`);
            if (!response.ok) {
                throw new Error(`Roupa com ID ${id} não encontrado.`);
            }
            const outfit = await response.json();
            console.log(`Roupa com o ID ${id} encontrado:`, outfit);
        }
        catch (error) {
            console.error('Erro ao buscar roupa:', error);
        }
    }
}
exports.default = ClothesController;

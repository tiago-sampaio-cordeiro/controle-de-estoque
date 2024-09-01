"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const stationery_1 = __importDefault(require("../models/stationery"));
class StationeryController {
    constructor(apiURL) {
        this.prompt = (0, prompt_sync_1.default)();
        this.apiURL = apiURL;
    }
    async createStationery(productName, price, quantity, stationeryBrand) {
        let newStationery = new stationery_1.default({
            productName,
            price,
            quantity,
            stationeryBrand
        });
        try {
            const response = await fetch(`${this.apiURL}/stationery`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newStationery)
            });
            const stationery = await response.json();
            console.log('Produto cadastrado com sucesso', stationery);
            return newStationery;
        }
        catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error;
        }
    }
    async listStationeries() {
        try {
            const response = await fetch(`${this.apiURL}/stationery`);
            const stationery = await response.json();
            console.log('Produtos Eletrônicos:', stationery);
        }
        catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }
    idUpdate() {
        let idProduct = this.prompt('Digite o id: ');
        return idProduct;
    }
    async getStationeryById() {
        const id = this.idUpdate();
        try {
            const response = await fetch(`${this.apiURL}/stationery/${id}`);
            if (!response.ok) {
                throw new Error(`Produto de papelaria com ID ${id} não encontrado.`);
            }
            const electronicProduct = await response.json();
            console.log(`Produto de papelaria com o ID ${id} encontrado:`, electronicProduct);
        }
        catch (error) {
            console.error('Erro ao buscar produto de papelaria:', error);
        }
    }
}
exports.default = StationeryController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const electronicProduct_1 = __importDefault(require("../models/electronicProduct"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const customErrors_1 = __importDefault(require("../errors/customErrors"));
class ElectronicProductController {
    constructor(apiURL) {
        this.prompt = (0, prompt_sync_1.default)();
        this.apiURL = apiURL;
    }
    async createElectronicProduct(productName, price, quantity, brand, voltage, color) {
        let newElectronicProduct = new electronicProduct_1.default({
            productName,
            price,
            quantity,
            brand,
            voltage,
            color
        });
        try {
            const response = await (0, node_fetch_1.default)(`${this.apiURL}/electronicProducts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newElectronicProduct),
            });
            const electronicProduct = await response.json();
            console.log('Produto cadastrado com sucesso', electronicProduct);
            newElectronicProduct.checkVoltage();
            return newElectronicProduct;
        }
        catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error;
        }
    }
    async listElectronicProducts() {
        try {
            const response = await (0, node_fetch_1.default)(`${this.apiURL}/electronicProducts`);
            const electronicProduct = await response.json();
            console.log('Produtos Eletrônicos:', electronicProduct);
        }
        catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }
    idUpdate() {
        let idProduct = this.prompt('Digite o id: ');
        return idProduct;
    }
    async getElectronicProductById() {
        let id = this.idUpdate();
        try {
            const response = await (0, node_fetch_1.default)(`${this.apiURL}/electronicProducts/${id}`);
            if (!response.ok) {
                throw new Error(`Produto com ID ${id} não encontrado.`);
            }
            const electronicProduct = await response.json();
            console.log(`Produto com o ID ${id} encontrado:`, electronicProduct);
        }
        catch (error) {
            console.error('Erro ao buscar produto:', error);
        }
    }
    async deleteElectronicProduct() {
        let message = 'erro ao deletar produto eletronico';
        let statusCode = 500;
        let id = this.idUpdate();
        try {
            const response = await (0, node_fetch_1.default)(`${this.apiURL}/electronicProducts/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log(`Produto com ID ${id} deletado com sucesso.`);
            }
            else {
                throw new customErrors_1.default(message, statusCode);
            }
        }
        catch (error) {
            if (error instanceof customErrors_1.default) {
                console.error(`${error.name}: ${error.message}`);
            }
            else {
                console.error('Erro inesperado:', error);
            }
            throw error;
        }
    }
}
exports.default = ElectronicProductController;

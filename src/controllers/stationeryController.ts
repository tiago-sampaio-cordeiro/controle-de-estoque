import PromptSync from "prompt-sync";
import StationeryProps from "../interfaces/stationeryProps";
import Stationery from "../models/stationery";

export default class StationeryController {
    private apiURL: string;

    constructor(apiURL: string) {
        this.apiURL = apiURL
    }

    private prompt = PromptSync();

    public async createStationery(
        productName: string,
        price: number,
        quantity: number,
        stationeryBrand: string): Promise<StationeryProps> {
        let newStationery = new Stationery({
            productName,
            price,
            quantity,
            stationeryBrand
        })

        try {
            const response = await fetch(`${this.apiURL}/stationery`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newStationery)
            })
            const stationery = await response.json();
            console.log('Produto cadastrado com sucesso', stationery);
            return newStationery
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error
        }
    }

    public async listStationeries(): Promise<void> {
        try {
            const response = await fetch(`${this.apiURL}/stationery`);
            const stationery = await response.json();
            console.log('Produtos Eletrônicos:', stationery);
        } catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }

    public idUpdate(): string {
        let idProduct = this.prompt('Digite o id: ')
        return idProduct
    }


    public async getStationeryById(): Promise<void> {
        const id = this.idUpdate();
        try {
            const response = await fetch(`${this.apiURL}/stationery/${id}`);

            if (!response.ok) {
                throw new Error(`Produto de papelaria com ID ${id} não encontrado.`);
            }

            const electronicProduct = await response.json();
            console.log(`Produto de papelaria com o ID ${id} encontrado:`, electronicProduct);
        } catch (error) {
            console.error('Erro ao buscar produto de papelaria:', error);
        }
    }
}
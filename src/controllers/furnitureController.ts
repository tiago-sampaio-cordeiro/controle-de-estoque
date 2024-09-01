import PromptSync from "prompt-sync";
import FurnitureProps from "../interfaces/furnitureProps";
import Furniture from "../models/furniture";

export default class FurnitureController {
    private apiURL: string;

    constructor(apiURL: string) {
        this.apiURL = apiURL
    }

    private prompt = PromptSync();

    public async createFurniture(
        productName: string,
        price: number,
        quantity: number,
        furnitureColor: string): Promise<FurnitureProps> {
        let newFurniture = new Furniture({
            productName,
            price,
            quantity,
            furnitureColor
        })

        try {
            const response = await fetch(`${this.apiURL}/furniture`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFurniture),
            })
            const furniture = await response.json();
            console.log('Produto cadastrado com sucesso', furniture);
            return newFurniture;
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error;
        }

    }

    public async listFurnitures(): Promise<void> {
        try {
            const response = await fetch(`${this.apiURL}/furniture`);
            const furniture = await response.json();
            console.log('Móvel:', furniture);
        } catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }


    public idUpdate(): string {
        let idProduct = this.prompt('Digite o id: ')
        return idProduct
    }


    public async getFurnitureById(): Promise<void> {
        const id = this.idUpdate();
        try {
            const response = await fetch(`${this.apiURL}/furniture/${id}`);

            if (!response.ok) {
                throw new Error(`Movel com ID ${id} não encontrado.`);
            }

            const electronicProduct = await response.json();
            console.log(`Movel com o ID ${id} encontrado:`, electronicProduct);
        } catch (error) {
            console.error('Erro ao buscar Movel:', error);
        }
    }
}
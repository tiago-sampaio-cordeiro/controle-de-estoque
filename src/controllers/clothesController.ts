import PromptSync from "prompt-sync";
import ClothesProps from "../interfaces/clothesProps";
import Clothes from "../models/clothes";
import fetch from 'node-fetch';
import ElectronicProductController from "./electronicProductController";


export default class ClothesController {
    private apiURL: string;

    constructor(apiURL: string) {
        this.apiURL = apiURL
    }

    private prompt = PromptSync();

    public async createClothes(
        productName: string,
        price: number,
        quantity: number,
        brand: string,
        size: string,
        clothesColor: string,
        tissue: string): Promise<ClothesProps> {
        let newClothes = new Clothes({
            productName,
            price,
            quantity,
            brand,
            size,
            clothesColor,
            tissue
        })


        try {
            const response = await fetch(`${this.apiURL}/clothes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newClothes),
            })
            const clothes = await response.json();
            console.log('Produto cadastrado com sucesso', clothes);
            return newClothes;
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error;
        }
    }

    public async listClothes(): Promise<void> {
        try {
            const response = await fetch(`${this.apiURL}/clothes`);
            const clothes = await response.json();
            console.log('Roupas:', clothes);
        } catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }

    public idUpdate(): string {
        let idProduct = this.prompt('Digite o id: ')
        return idProduct
    }

    public async getOutfitById(): Promise<void> {
        const id = this.idUpdate();
        try {
            const response = await fetch(`${this.apiURL}/clothes/${id}`);

            if (!response.ok) {
                throw new Error(`Roupa com ID ${id} não encontrado.`);
            }

            const outfit = await response.json();
            console.log(`Roupa com o ID ${id} encontrado:`, outfit);
        } catch (error) {
            console.error('Erro ao buscar roupa:', error);
        }
    }
}
   
    


    
    
    
   
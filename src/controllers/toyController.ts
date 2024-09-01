import PromptSync from "prompt-sync"
import ToyProps from "../interfaces/toyProps"
import Toy from "../models/toys"

export default class ToyController {
    private apiURL: string

    constructor(apiURL: string) {
        this.apiURL = apiURL
    }

    private prompt = PromptSync()

    public async createToy(
        productName: string,
        price: number,
        quantity: number,
        material: string,
        toyColor: string): Promise<ToyProps> {
        let newToy = new Toy({
            productName,
            price,
            quantity,
            material,
            toyColor
        })

        try {
            const response = await fetch(`${this.apiURL}/toy`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newToy),
            })
            const toy = await response.json();
            console.log('Produto cadastrado com sucesso', toy);
            return newToy;
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error;
        }
    }

    public async listToys(): Promise<void> {
        try {
            const response = await fetch(`${this.apiURL}/toy`);
            const toy = await response.json();
            console.log('Produtos Eletrônicos:', toy);
        } catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }

    public idUpdate(): string {
        let idProduct = this.prompt('Digite o id: ')
        return idProduct
    }


    public async getToyById(): Promise<void> {
        const id = this.idUpdate();
        try {
            const response = await fetch(`${this.apiURL}/toy/${id}`);

            if (!response.ok) {
                throw new Error(`Brinquedo com ID ${id} não encontrado.`);
            }

            const electronicProduct = await response.json();
            console.log(`Brinquedo com o ID ${id} encontrado:`, electronicProduct);
        } catch (error) {
            console.error('Erro ao buscar brinquedo:', error);
        }
    }
}
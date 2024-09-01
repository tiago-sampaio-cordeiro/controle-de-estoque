import PromptSync from "prompt-sync";
import PetshopProps from "../interfaces/petshopProps";
import Petshop from "../models/petshop";

export default class PetshopController {
    private apiURL: string;

    constructor(apiUrl: string) {
        this.apiURL = apiUrl
    }

    private prompt = PromptSync();

    public async createPetshop(
        productName: string,
        price: number,
        quantity: number,
        petColor: string,
        petType: string): Promise<PetshopProps> {
        let newPetshop = new Petshop({
            productName,
            price,
            quantity,
            petColor,
            petType
        })

        try {
            const response = await fetch(`${this.apiURL}/petshop`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPetshop)
            })
            const petshop = await response.json();
            console.log('Produto cadastrado com sucesso', petshop);
            return newPetshop
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error
        }
    }

    public async listPetShop(): Promise<void> {
        try {
            const response = await fetch(`${this.apiURL}/petshop`);
            const petshop = await response.json();
            console.log('Produtos de petshop:', petshop);
        } catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }

    public idUpdate(): string {
        let idProduct = this.prompt('Digite o id: ')
        return idProduct
    }


    public async getPetShopById(): Promise<void> {
        const id = this.idUpdate();
        try {
            const response = await fetch(`${this.apiURL}/petshop/${id}`);

            if (!response.ok) {
                throw new Error(`Produto de petshop com ID ${id} não encontrado.`);
            }

            const electronicProduct = await response.json();
            console.log(`Produto de petshop com o ID ${id} encontrado:`, electronicProduct);
        } catch (error) {
            console.error('Erro ao buscar produto de petshop:', error);
        }
    }
}
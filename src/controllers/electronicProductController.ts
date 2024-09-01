import PromptSync from "prompt-sync";
import ElectronicProductProps from "../interfaces/electronicProductsProps";
import ElectronicProduct from "../models/electronicProduct";
import fetch from 'node-fetch';
import CustomError from "../errors/customErrors";


export default class ElectronicProductController {
    private apiURL: string;
    
    
    constructor(apiURL: string) {
        this.apiURL = apiURL
    }

    private prompt = PromptSync();

    public async createElectronicProduct(
        productName: string,
        price: number,
        quantity: number,
        brand: string,
        voltage: string,
        color: string): Promise<ElectronicProductProps> {
        let newElectronicProduct = new ElectronicProduct({
            productName,
            price,
            quantity,
            brand,
            voltage,
            color
        })


        try {
            const response = await fetch(`${this.apiURL}/electronicProducts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newElectronicProduct),
            })
            const electronicProduct = await response.json();
            console.log('Produto cadastrado com sucesso', electronicProduct);
            newElectronicProduct.checkVoltage()
            return newElectronicProduct;
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            throw error;
        }
    }

    public async listElectronicProducts(): Promise<void> {
        try {
            const response = await fetch(`${this.apiURL}/electronicProducts`);
            const electronicProduct = await response.json();
            console.log('Produtos Eletrônicos:', electronicProduct);
        } catch (error) {
            console.error('Erro ao buscar produtos eletrônicos:', error);
        }
    }


    public idUpdate(): string {
        let idProduct = this.prompt('Digite o id: ')
        return idProduct
    }

   
    
    public async getElectronicProductById(): Promise<void> {
        let id = this.idUpdate();
        try {
            const response = await fetch(`${this.apiURL}/electronicProducts/${id}`);

            if (!response.ok) {
                throw new Error(`Produto com ID ${id} não encontrado.`);
            }

            const electronicProduct = await response.json();
            console.log(`Produto com o ID ${id} encontrado:`, electronicProduct);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
        }
    }

    public async deleteElectronicProduct(): Promise<void> {
        let message = 'erro ao deletar produto eletronico'
        let statusCode = 500
        let id = this.idUpdate()
        try {
            const response = await fetch(`${this.apiURL}/electronicProducts/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log(`Produto com ID ${id} deletado com sucesso.`);
            } else {
                throw new CustomError(message, statusCode);
            }
        } catch (error) {
            if (error instanceof CustomError) {
                console.error(`${error.name}: ${error.message}`);
            } else {
                console.error('Erro inesperado:', error);
            }
            throw error;
        }
    }





























    // public async getObject(productId: string): Promise<ElectronicProductProps | null> {
    //     const id = this.idUpdate();
    //     try {
    //         const response = await fetch(`${this.apiURL}/electronicProducts/${id}`);
            
    //         if (!response.ok) {
    //             throw new Error(`Produto com ID ${id} não encontrado.`);
    //         }

    //         const product = await response.json();
    //         return product; // Retorna o produto encontrado
    //     } catch (error) {
    //         console.error('Erro ao buscar produto:', error);
    //         return null; // Retorna null em caso de erro
    //     }
    // }

    
   


    // public async updateElectronicProduct(
    //     updatedData: Partial<ElectronicProductProps>): Promise<void> {
    //     try {
    //         const id = this.idUpdate()
    //         const response = await fetch(`${this.apiURL}/electronicProducts/${id}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(updatedData),
    //         });
    //         const electronicProduct = await response.json();


    //         console.log(`Produto eletronico ${id} atualizado com sucesso.`);
    //     } catch (error) {
    //         console.error('Erro ao atualizar o produto eletronico:', error);
    //     }
    // }


}




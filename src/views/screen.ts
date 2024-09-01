import promptSync from "prompt-sync"
import ElectronicProductController from "../controllers/electronicProductController";
import ClothesController from "../controllers/clothesController";
import FurnitureController from "../controllers/furnitureController";
import StationeryController from "../controllers/stationeryController";
import PetshopController from "../controllers/petshopController";
import ToyController from "../controllers/toyController";

export default class Screen {
    electronicProductController: ElectronicProductController
    clothesController: ClothesController
    furnitureController: FurnitureController
    stationeryController: StationeryController
    petshopController: PetshopController
    toyController: ToyController


    constructor(
        electronicProduct: ElectronicProductController,
        clothes: ClothesController,
        furniture: FurnitureController,
        stationery: StationeryController,
        petshop: PetshopController,
        toy: ToyController
    ) {
        this.electronicProductController = electronicProduct
        this.clothesController = clothes
        this.furnitureController = furniture
        this.stationeryController = stationery
        this.petshopController = petshop
        this.toyController = toy
    }

    private prompt = promptSync()

    //showMenu ira mostra as opções no terminal
    public showMenu(): void {
        console.log('\n=== Produtos ===');
        console.log('1. Cadastrar produto');
        console.log('2. Mostar categoria');
        console.log('3. exibir produto');
        console.log('4. Atualizar produto');
        console.log('5. Excluir produto');
        console.log('6. sair');
    }

    //showProductTypeMenu ira mostrar as categorias de produtos
    public showProductTypeMenu(): void {
        console.log('\n=== Selecione a categoria do produto ===');
        console.log('1. Produtos eletronicos');
        console.log('2. Roupas');
        console.log('3. Moveis');
        console.log('4. Papelaria');
        console.log('5. Petshop');
        console.log('6. Brinquedos');
    }


    //getUserChoice irá capturar a opção
    public getUserChoice(): void {
        let exit = false;
        while (!exit) {
            this.showMenu();
            const choice = this.prompt('Selecione uma opção: ');
            switch (choice) {
                case '1':
                    this.showProductTypeMenu()
                    const productCategory = this.prompt('Selecione uma categoria: ')
                    switch (productCategory) {
                        case '1':
                            console.log(`Você selecionou cadastrar um produto da categoria: ${productCategory}`);

                            let name = this.prompt("Digite o nome do produto: ");
                            let price = parseFloat(this.prompt("Digite o preço: "));
                            let quantity = parseFloat(this.prompt("Digite a quantidade: "));
                            let brand = this.prompt("Digite a marca: ");
                            let voltage = this.prompt("Digite a voltagem: ");
                            let color = this.prompt("Digite a cor: ")
                            this.electronicProductController.createElectronicProduct(name, price, quantity, brand, voltage, color)
                            break
                        case '2':
                            console.log(`Você selecionou cadastrar um produto da categoria: ${productCategory}`);

                            let outfitName = this.prompt("Digite o nome do produto: ");
                            let outfitPrice = parseFloat(this.prompt("Digite o preço: "));
                            let outfitQuantity = parseFloat(this.prompt("Digite a quantidade: "));
                            let outfitBrand = this.prompt("Digite a marca: ");
                            let size = this.prompt("Digite o tamanho da roupa: ");
                            let clothesColor = this.prompt("Digite a cor: ")
                            let tissue = this.prompt('Digite o tipo de tecido: ')
                            this.clothesController.createClothes(outfitName, outfitPrice, outfitQuantity, outfitBrand, size, clothesColor, tissue)
                            break
                        case '3':
                            console.log(`Você selecionou cadastrar um produto da categoria: ${productCategory}`);

                            let furnitureName = this.prompt("Digite o nome do produto: ");
                            let furniturePrice = parseFloat(this.prompt("Digite o preço: "));
                            let furnitureQuantity = parseFloat(this.prompt("Digite a quantidade: "));
                            let furnitureColor = this.prompt('Digite a cor do movel: ')
                            this.furnitureController.createFurniture(furnitureName, furniturePrice, furnitureQuantity, furnitureColor)
                            break
                        case '4':
                            console.log(`Você selecionou cadastrar um produto da categoria: ${productCategory}`);

                            let stationeryName = this.prompt("Digite o nome do produto: ");
                            let stationeryPrice = parseFloat(this.prompt("Digite o preço: "));
                            let stationeryQuantity = parseFloat(this.prompt("Digite a quantidade: "));
                            let stationeryBrand = this.prompt('Digite a cor do movel: ')
                            this.stationeryController.createStationery(stationeryName, stationeryPrice, stationeryQuantity, stationeryBrand)
                            break
                        case '5':
                            console.log(`Você selecionou cadastrar um produto da categoria: ${productCategory}`);

                            let petName = this.prompt("Digite o nome do produto: ");
                            let petPrice = parseFloat(this.prompt("Digite o preço: "));
                            let petQuantity = parseFloat(this.prompt("Digite a quantidade: "));
                            let petColor = this.prompt('Digite a cor do produto: ');
                            let petType = this.prompt('Digite para qual animal é indicado: ')
                            this.petshopController.createPetshop(petName, petPrice, petQuantity, petColor, petType)
                            break
                        case '6':
                            console.log(`Você selecionou cadastrar um produto da categoria: ${productCategory}`);

                            let toyName = this.prompt("Digite o nome do produto: ");
                            let toyPrice = parseFloat(this.prompt("Digite o preço: "));
                            let toyQuantity = parseFloat(this.prompt("Digite a quantidade: "));
                            let material = this.prompt('Digite o material do brinquedo: ');
                            let toyColor = this.prompt('Digite a cor do brinquedo: ')
                            this.toyController.createToy(toyName, toyPrice, toyQuantity, material, toyColor)
                            break
                    }
                    break
                case '2':
                    this.showProductTypeMenu()
                    const showCategory = this.prompt('Selecione a categoria dos produtos: ')
                    switch (showCategory) {
                        case '1':
                            console.log(`Você selecionou exibir os produtos da categoria: ${showCategory}`);
                            this.electronicProductController.listElectronicProducts()
                            break
                        case '2':
                            console.log(`Você selecionou exibir os produtos da categoria: ${showCategory}`);
                            this.clothesController.listClothes()
                            break
                        case '3':
                            console.log(`Você selecionou exibir os produtos da categoria: ${showCategory}`);
                            this.furnitureController.listFurnitures()
                            break
                        case '4':
                            console.log(`Você selecionou exibir os produtos da categoria: ${showCategory}`);
                            this.stationeryController.listStationeries()
                            break
                        case '5':
                            console.log(`Você selecionou exibir os produtos da categoria: ${showCategory}`);
                            this.petshopController.listPetShop()
                            break
                        case '6':
                            console.log(`Você selecionou exibir os produtos da categoria: ${showCategory}`);
                            this.toyController.listToys()
                            break
                    }
                    break;
                case '3':
                    this.showProductTypeMenu()
                    const updateProduct = this.prompt('Selecione a categoria de produto: ')
                    switch (updateProduct) {
                        case '1':
                            console.log(`Você selecionou visualisar um produto da categoria: ${updateProduct}`)
                            this.electronicProductController.getElectronicProductById()
                            break
                        case '2':
                            console.log(`Você selecionou visualisar um produto da categoria: ${updateProduct}`)
                            this.clothesController.getOutfitById()
                            break
                        case '3':
                            console.log(`Você selecionou visualisar um produto da categoria: ${updateProduct}`)
                            this.furnitureController.getFurnitureById()
                            break
                        case '4':
                            console.log(`Você selecionou visualisar um produto da categoria: ${updateProduct}`)
                            this.stationeryController.getStationeryById()
                            break
                        case '5':
                            console.log(`Você selecionou visualisar um produto da categoria: ${updateProduct}`)
                            this.petshopController.getPetShopById()
                            break
                        case '6':
                            console.log(`Você selecionou visualisar um produto da categoria: ${updateProduct}`)
                            this.toyController.getToyById()
                            break
                    }
                    break;
                case '4':
                    this.showProductTypeMenu()
                    const productShow = this.prompt('Selecione a categoria dos produtos: ')
                    switch (productShow) {
                        case '1':
                            console.log(`Você selecionou atualizar um produto da categoria: ${productShow}`);
                            break
                        case '2':
                            console.log(`Você selecionou atualizar um produto da categoria: ${productShow}`);

                            break
                        case '3':
                            console.log(`Você selecionou atualizar produto da categoria: ${productShow}`);

                            break
                        case '4':
                            console.log(`Você selecionou atualizar um produto da categoria: ${productShow}`);

                            break
                        case '5':
                            console.log(`Você selecionou atualizar um produto da categoria: ${productShow}`);

                            break
                        case '6':
                            console.log(`Você selecionou atualizar um produto da categoria: ${productShow}`);

                            break
                    }
                    break;
                case '5':
                    this.showProductTypeMenu()
                    const deleteProduct = this.prompt('Selecione a categoria dos produtos: ')
                    switch (deleteProduct) {
                        case '1':
                            console.log(`Você selecionou excluir um produto da categoria: ${deleteProduct}`);

                            this.electronicProductController.deleteElectronicProduct()
                            break
                        case '2':
                            console.log(`Você selecionou excluir um produto da categoria: ${deleteProduct}`);

                            break
                        case '3':
                            console.log(`Você selecionou excluir um produto da categoria: ${deleteProduct}`);

                            break
                        case '4':
                            console.log(`Você selecionou excluir um produto da categoria: ${deleteProduct}`);

                            break
                        case '5':
                            console.log(`Você selecionou excluir um produto da categoria: ${deleteProduct}`);

                            break
                        case '6':
                            console.log(`Você selecionou excluir um produto da categoria: ${deleteProduct}`);

                            break
                    }
                    break;
                    break;
                case '6':
                    exit = true;
                    console.log('Saindo');
                    break;

                default:
                    console.log('Opção invalida, tente de novo');
            }
        }

    }
}





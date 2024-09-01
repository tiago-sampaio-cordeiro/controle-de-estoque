import Screen from "../views/screen";
import ClothesController from "./clothesController";
import ElectronicProductController from "./electronicProductController";
import FurnitureController from "./furnitureController";
import PetshopController from "./petshopController";
import StationeryController from "./stationeryController";
import ToyController from "./toyController";


export default class Start {
    private electronicProductController: ElectronicProductController;
    private clothesController: ClothesController;
    private furnitureController: FurnitureController;
    private stationeryController: StationeryController;
    private petShopController: PetshopController;
    private toyController: ToyController
    private startScreen: Screen;

    constructor(
        electronicProducController: ElectronicProductController,
        clothesController: ClothesController,
        furnitureController: FurnitureController,
        stationeryController: StationeryController,
        petShopController: PetshopController,
        toyController: ToyController,
        startScreen: Screen
    ) {
        this.electronicProductController = electronicProducController
        this.clothesController = clothesController
        this.furnitureController = furnitureController
        this.stationeryController = stationeryController
        this.petShopController = petShopController
        this.toyController = toyController
        this.startScreen = startScreen
            
    }


    public start(): void {
        this.startScreen.getUserChoice()
    }


}


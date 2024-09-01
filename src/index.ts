
import ClothesController from "./controllers/clothesController";
import ElectronicProductController from "./controllers/electronicProductController";
import FurnitureController from "./controllers/furnitureController";
import PetshopController from "./controllers/petshopController";
import Start from "./controllers/startController";
import StationeryController from "./controllers/stationeryController";
import ToyController from "./controllers/toyController";
import Screen from "./views/screen";

const apiURL = 'http://localhost:3001';


let electronicProductController = new ElectronicProductController(apiURL);
let clothesController = new ClothesController(apiURL);
let furnitureController = new FurnitureController(apiURL);
let stationeryController = new StationeryController(apiURL);
let petShopController = new PetshopController(apiURL);
let toyController = new ToyController(apiURL);


let screen = new Screen(
        electronicProductController,
        clothesController,
        furnitureController,
        stationeryController,
        petShopController,
        toyController
    );


let start = new Start(
    electronicProductController,
    clothesController,
    furnitureController,
    stationeryController,
    petShopController,
    toyController,
    screen
);

start.start();








































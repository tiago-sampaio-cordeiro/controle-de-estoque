"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Start {
    constructor(electronicProducController, clothesController, furnitureController, stationeryController, petShopController, toyController, startScreen) {
        this.electronicProductController = electronicProducController;
        this.clothesController = clothesController;
        this.furnitureController = furnitureController;
        this.stationeryController = stationeryController;
        this.petShopController = petShopController;
        this.toyController = toyController;
        this.startScreen = startScreen;
    }
    start() {
        this.startScreen.getUserChoice();
    }
}
exports.default = Start;

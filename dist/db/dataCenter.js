"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Datacenter {
    constructor() {
        this.admins = [];
        this.clothes = [];
        this.electronics = [];
        this.furnitures = [];
        this.petshopItens = [];
        this.stationeries = [];
        this.toys = [];
    }
    addNewEletronicProducts(electronic) {
        this.electronics.push(electronic);
        return electronic;
    }
    getElectronicProducts() {
        return this.electronics.length;
    }
    removeEletronicProducts(id) {
        this.electronics.splice(id, 1);
    }
    addNewAdmin(administrator) {
        this.admins.push(administrator);
    }
    removeAdmin(id) {
        this.admins.splice(id, 1);
    }
    getAdmin() {
        return this.admins.length;
    }
    addNewClothes(costume) {
        this.clothes.push(costume);
    }
    removeClothes(id) {
        this.clothes.splice(id, 1);
    }
    getclothes() {
        return this.clothes.length;
    }
    addNewFurniture(furn) {
        this.furnitures.push(furn);
    }
    removeFurniture(id) {
        this.furnitures.splice(id, 1);
    }
    getFurniture() {
        return this.furnitures.length;
    }
    addNewPetShop(pet) {
        this.petshopItens.push(pet);
    }
    removePetShop(id) {
        this.petshopItens.splice(id, 1);
    }
    getPetShop() {
        return this.petshopItens.length;
    }
    addNewStationeryItem(stat) {
        this.stationeries.push(stat);
    }
    removeStationeryItem(id) {
        this.stationeries.splice(id, 1);
    }
    getStationeryItem() {
        return this.stationeries.length;
    }
    addNewToys(toy) {
        this.toys.push(toy);
    }
    removeToys(id) {
        this.toys.splice(id, 1);
    }
    getToys() {
        return this.toys.length;
    }
}
exports.default = Datacenter;

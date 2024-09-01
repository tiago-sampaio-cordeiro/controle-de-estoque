"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    constructor(Admin) {
        this.id = Admin.id;
        this.name = Admin.name;
        this.email = Admin.email;
        this.phone = Admin.phone;
        this.password = Admin.password;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
}
exports.default = Admin;
//let Administrador = new Admin("Tiago", "sampaio415@gmail.com", 999424907, "1234");
//Administrador.showInfo()

import AdminProps from "../interfaces/adminProps";




export default class Admin implements AdminProps {
    id: number;
    name: string;
    email: string;
    phone: number;
    password: string;

    constructor(Admin: AdminProps)
        {
            this.id = Admin.id
            this.name = Admin.name;
            this.email = Admin.email;
            this.phone = Admin.phone;
            this.password = Admin.password;
        }

    public getId() {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getEmail() {
        return this.email;
    }

    public setEmail(email:string): void {
        this.email = email;
    }

    public getPhone(): number {
        return this.phone;
    }

    public setPhone(phone: number): void {
        this.phone = phone;
    }

    public getPassword() {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

   

}

//let Administrador = new Admin("Tiago", "sampaio415@gmail.com", 999424907, "1234");

//Administrador.showInfo()
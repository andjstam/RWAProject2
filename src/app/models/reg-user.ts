export interface IRegUser {
    email: string;
    password: string;
    role: string;
}

export class RegUser implements IRegUser{
    email: string;
    password: string;
    role: string;

    constructor(em, pass, role) {
        this.email=em;
        this.password=pass;
        this.role=role;
    }
  
}
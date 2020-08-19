export interface IRegUser {
    email: string;
    password: string;
}

export class RegUser implements IRegUser{
    email: string;
    password: string;

    constructor(em, pass) {
        this.email=em;
        this.password=pass;
    }
  
}
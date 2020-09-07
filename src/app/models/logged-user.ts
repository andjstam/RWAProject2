export interface ILoggedUser {
    id:string;
    email: string;
    password: string;
    role: string;
}

export class LoggedUser implements ILoggedUser{
    id:string;
    email: string;
    password: string;
    role: string;

    constructor(em, pass, role) {
        this.email=em;
        this.password=pass;
        this.role=role;
    }
  
}
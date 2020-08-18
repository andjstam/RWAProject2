export interface IRegUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

export class RegUser implements IRegUser{
    id:string;
    first_name: string;
    last_name: string;
    email: string;

    constructor(fr,la,em) {
        this.first_name=fr;
        this.last_name=la;
        this.email=em;
    }
  
}
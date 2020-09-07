
export interface IDirector {
    id: number;
    name:string;
    surname:string;
    email: string;
    sertificate: string;
}

export class Director implements IDirector{
    id: number;
    name:string;
    surname:string;
    email: string;
    sertificate: string;

    constructor(name, surname, email, sertificate) {
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.sertificate=sertificate;
    }
  
}
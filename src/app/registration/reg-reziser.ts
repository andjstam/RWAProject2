
export interface IRegReziser {
    ime:string;
    prezime:string;
    email: string;
    sertifikat: string;
}

export class RegReziser implements IRegReziser{
    ime:string;
    prezime:string;
    email: string;
    sertifikat: string;

    constructor(ime,prez,em, sert) {
        this.ime=ime;
        this.prezime=prez;
        this.email=em;
        this.sertifikat=sert;
    }
  
}
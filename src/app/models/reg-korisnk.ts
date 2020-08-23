export interface IRegKorisnik {
    ime:string;
    prezime:string;
    email: string;
    tip: string;
    rejting: number;
    status: string;
    radno_mesto: string;

}

export class RegKorisnik implements IRegKorisnik{
    ime:string;
    prezime:string;
    email: string;
    tip: string;
    rejting: number;
    status: string;
    radno_mesto: string;

    constructor(ime,prez,em, tip, rejt, stat, radnom) {
        this.ime=ime;
        this.prezime=prez;
        this.email=em;
        this.tip=tip;
        this.rejting=rejt;
        this.status=stat;
        this.radno_mesto=radnom;
    }
  
}
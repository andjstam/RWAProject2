
export interface IOglas {
    id: number;
    naziv: string;
    opis:string;
    tip_korisnika: string;
    broj_korisnika: number;
    id_rezisera: number;
}

export class Oglas implements IOglas{
    id: number;
    naziv: string;
    opis: string;
    tip_korisnika: string;
    broj_korisnika: number;
    id_rezisera: number;

    constructor(id,naziv,opis, tip, broj, idRez) {
        this.id=id;
        this.naziv=naziv;
       this.opis=opis;
       this.tip_korisnika=tip;
       this.broj_korisnika=broj;
       this.id_rezisera=idRez;
    }
  
}

export interface IOglas {
    id: number;
    opis:string;
    tip_korisnika: string;
    broj_korisnika: number;
    id_rezisera: number;
}

export class Oglas implements IOglas{
    id: number;
    opis: string;
    tip_korisnika: string;
    broj_korisnika: number;
    id_rezisera: number;

    constructor(opis, tip, broj, idRez) {
       this.opis=opis;
       this.tip_korisnika=tip;
       this.broj_korisnika=broj;
       this.id_rezisera=idRez;
    }
  
}
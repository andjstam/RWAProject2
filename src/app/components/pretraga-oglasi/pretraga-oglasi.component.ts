import { Component, OnInit } from '@angular/core';
import { Oglas } from 'src/app/models/oglas';
import { KorisnikService } from '../../services/korisnik.service'

@Component({
  selector: 'app-pretraga-oglasi',
  templateUrl: './pretraga-oglasi.component.html',
  styleUrls: ['./pretraga-oglasi.component.css']
})
export class PretragaOglasiComponent implements OnInit {
  nizOglas: Oglas[]=[];
  filteredNizOglas: Oglas[]=[];

  _inputFilter: string;
  get inputFilter(){
    return this._inputFilter;
  }
  set inputFilter(value:string){
    this._inputFilter=value;
    this.filteredNizOglas= this.inputFilter ? this.filtriraj(this.inputFilter) : this.nizOglas;
  }

  constructor(private korisnikService: KorisnikService) { }

  ngOnInit(): void {
    this.korisnikService.getAllEvents()
    .subscribe(
      korisnici =>{
        korisnici.forEach(kr => {
          var nova=new Oglas(kr.id, kr.naziv, kr.opis, kr.tip_korisnika, kr.broj_korisnika, kr.id_rezisera);
          this.nizOglas.push(nova);
        },
        err => {
          console.log(err.message);
          alert(`Ne radi get`);
        });
      })
      // console.log(this.nizKorisnik)
      this.filteredNizOglas=this.nizOglas;
      console.log('on init end');
  }

  filtriraj(filterBy: string): Oglas[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.nizOglas.filter( (korisnik: Oglas)=>
        korisnik.tip_korisnika.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

}

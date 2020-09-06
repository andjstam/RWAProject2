import { Component, OnInit } from '@angular/core';
import { RegKorisnik } from 'src/app/models/reg-korisnk';
import { ReziserService} from '../../services/reziser.service'

@Component({
  selector: 'app-pretraga-korisnici',
  templateUrl: './pretraga-korisnici.component.html',
  styleUrls: ['./pretraga-korisnici.component.css']
})
export class PretragaKorisniciComponent implements OnInit {
  nizKorisnik: RegKorisnik[]=[];
  filteredNizKorisnik: RegKorisnik[]=[];
 
  _inputFilter: string;
  get inputFilter(){
    return this._inputFilter;
  }
  set inputFilter(value:string){
    this._inputFilter=value;
    this.filteredNizKorisnik= this.inputFilter ? this.filtriraj(this.inputFilter) : this.nizKorisnik;
  }
  constructor(private reziserService: ReziserService) { }

  ngOnInit(): void {
    
    this.reziserService.getAllUsers()
    .subscribe(
      korisnici =>{
        korisnici.forEach(kr => {
          var nova=new RegKorisnik(kr.ime, kr.prezime, kr.email, kr.tip, kr.rejting, kr.status, kr.radno_mesto);
          this.nizKorisnik.push(nova);
        },
        err => {
          console.log(err.message);
          alert(`Ne radi get`);
        });
      })
      // console.log(this.nizKorisnik)
      this.filteredNizKorisnik=this.nizKorisnik;
      console.log('on init end');
    
  }

  filtriraj(filterBy: string): RegKorisnik[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.nizKorisnik.filter( (korisnik: RegKorisnik)=>
        korisnik.ime.toLocaleLowerCase().indexOf(filterBy)!==-1 || 
        korisnik.prezime.toLocaleLowerCase().indexOf(filterBy)!==-1 ||
        korisnik.tip.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

}

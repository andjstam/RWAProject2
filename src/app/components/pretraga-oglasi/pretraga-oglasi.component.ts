import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-pretraga-oglasi',
  templateUrl: './pretraga-oglasi.component.html',
  styleUrls: ['./pretraga-oglasi.component.css']
})
export class PretragaOglasiComponent implements OnInit {
  nizOglas: Event[]=[];
  filteredNizOglas: Event[]=[];

  _inputFilter: string;
  get inputFilter(){
    return this._inputFilter;
  }
  set inputFilter(value:string){
    this._inputFilter=value;
    this.filteredNizOglas= this.inputFilter ? this.filtriraj(this.inputFilter) : this.nizOglas;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllEvents()
    .subscribe(
      events =>{
        events.forEach(ev => {
          var newEvent=new Event(ev.id, ev.name, ev.description, ev.userType, ev.userCount, ev.directorId);
          this.nizOglas.push(newEvent);
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

  filtriraj(filterBy: string): Event[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.nizOglas.filter( (korisnik: Event)=>
        korisnik.userType.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

}

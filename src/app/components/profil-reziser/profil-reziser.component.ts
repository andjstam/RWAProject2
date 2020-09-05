import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectLoggedUser } from '../login/auth.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-profil-reziser',
  templateUrl: './profil-reziser.component.html',
  styleUrls: ['./profil-reziser.component.css']
})
export class ProfilReziserComponent implements OnInit {
  displayOglasModal:boolean;
  user$=this.store.pipe(
    select(selectLoggedUser),
    filter(val => val !== undefined)
  );
  constructor(private store: Store<AppState>) { 
    this.displayOglasModal=false;
  }

  ngOnInit(): void {
    //da nadje rezisera sa tim id-jem i da ga sacuva u store
    //onda tu imamo sve informacije koje su nam potrebne o reziseru
  }

  showOglasModal(){
    this.displayOglasModal=true;
  }

  hideOglasModal(){
    this.displayOglasModal=false;
  }

}

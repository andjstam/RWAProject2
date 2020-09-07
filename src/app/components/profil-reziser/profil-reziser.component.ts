import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { selectLoggedUser } from '../../store/reducers/auth.reducer';
import { filter } from 'rxjs/operators';
import { NeedDirectorInfo } from 'src/app/store/actions/director.actions';
import { selectDirectorInfo } from 'src/app/store/reducers/director.reducer';

@Component({
  selector: 'app-profil-reziser',
  templateUrl: './profil-reziser.component.html',
  styleUrls: ['./profil-reziser.component.css']
})
export class ProfilReziserComponent implements OnInit {
  displayOglasModal:boolean;
  name: string;
  email: string;
  sertificate: string;

  user$=this.store.pipe(
    select(selectLoggedUser),
    filter(val => val !== undefined)
  );

  director$=this.store.pipe(
    select(selectDirectorInfo),
    filter(val => val !== undefined)
  );
  //kako prikazati podatke na strani???

  constructor(private store: Store<AppState>) { 
    this.displayOglasModal=false;
  }

  ngOnInit(): void {
    this.user$.subscribe(
      user => this.store.dispatch(new NeedDirectorInfo(user.email))
    )
    this.director$.subscribe( director =>{
        this.name=director.name + " "+ director.surname;
        this.email=director.email;
        this.sertificate=director.sertificate;
     }
    )
  }

  showOglasModal(){
    this.displayOglasModal=true;
  }

  hideOglasModal(){
    this.displayOglasModal=false;
  }

}

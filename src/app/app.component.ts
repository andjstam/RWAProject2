import { Component } from '@angular/core';
import {ShowNavService} from './services/show-nav.service'
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { Logout } from './store/actions/auth.actions';
import { Router } from '@angular/router';
import { selectLoggedUser } from './store/selectors/auth.selectors';
import {filter,} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Direktorg';
  showNavButtons: boolean;
  user$=this.store.pipe(
      select(selectLoggedUser),
      filter(val => val !== undefined)
    );

  constructor(private showNavService: ShowNavService,
              private store: Store<AppState>,
              private router: Router) {}

  ngOnInit(){
    this.showNavService.flagCurrent.subscribe(flag => this.showNavButtons=flag);
    console.log("Show nav buttons: "+ this.showNavButtons);
  }

  logoutClicked(){
    this.store.dispatch(new Logout());
    this.showNavService.changeFlag(false);
    this.router.navigate([`./mainPage`]);
  }

  pocetnaClicked(){
    this.user$.subscribe(
      user=>{
        if(user.role==="reziser"){
          this.router.navigate(['/reziser/pocetna'])
        }
        else{
          this.router.navigate(['/korisnik/pocetna'])
        }
      }
    )
  }

  profilClicked(){
    this.user$.subscribe(
      user=>{
        if(user.role==="reziser"){
          this.router.navigate(['/reziser/profil'])
        }
        else{
          this.router.navigate(['/korisnik/profil'])
        }
      }
    )
  }

}

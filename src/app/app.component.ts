import { Component } from '@angular/core';
import {ShowNavService} from './services/show-nav.service'
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { Logout } from './components/login/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Direktorg';
  showNavButtons: boolean;

  constructor(private showNavService: ShowNavService,
              private store: Store<AppState>,
              private router: Router) {}

  ngOnInit(){
    this.showNavService.flagCurrent.subscribe(flag => this.showNavButtons=flag);
    console.log(this.showNavButtons);
  }

  logoutClicked(){
    this.store.dispatch(new Logout());
    this.showNavService.changeFlag(false);
    this.router.navigate([`./mainPage`]);
  }

}

import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, Login, Logout} from './auth.actions';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer, of} from 'rxjs';
import { ShowNavService } from 'src/app/services/show-nav.service';


@Injectable()
export class AuthEffects {

  @Effect({dispatch:false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action => localStorage.setItem("user", JSON.stringify(action.payload.user)))
  );

  @Effect({dispatch:false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(() => {

      localStorage.removeItem("user");
      this.router.navigateByUrl('/login');

    })
  );

  @Effect()
  init$ = defer(() => {

    const userData = localStorage.getItem("user");

    if (userData) {
      this.showNavService.changeFlag(true);
      return of(new Login({user:JSON.parse(userData)}));

    }
    else {
      this.showNavService.changeFlag(false);
      return <any>of(new Logout());
    }

  });

  constructor(private actions$: Actions, private router:Router, private showNavService: ShowNavService) {

  }


}

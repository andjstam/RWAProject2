import { Injectable } from '@angular/core';
import {Actions, Effect, ofType, createEffect} from '@ngrx/effects';
import {AuthActionTypes, Login, Logout} from '../actions/auth.actions';
import {tap, map, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer, of} from 'rxjs';
import { ShowNavService } from '../../services/show-nav.service';
import { DeleteDirectorInfo, DirectorActionTypes } from '../actions/director.actions';
import { DeleteAllEvents, EventActionTypes } from '../actions/event.actions';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private router:Router, private showNavService: ShowNavService) { }

  @Effect({dispatch:false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action => localStorage.setItem("user", JSON.stringify(action.payload.user)))
  );

  logout$ = createEffect(() => this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    switchMap(()=> [
      new DeleteAllEvents(),
      new DeleteDirectorInfo()
    ]),
    // map(() => ({ type: DirectorActionTypes.DELETE_INFO_ACTION})),
    // map(() => ({ type: EventActionTypes.DELETE_ALL_EVENTS})),
    tap(() => {
      localStorage.removeItem("user");
      this.router.navigateByUrl('/login');
    }))
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
}

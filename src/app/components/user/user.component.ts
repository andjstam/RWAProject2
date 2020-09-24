import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { AppState } from 'src/app/store';
import { LoadAllEvents } from 'src/app/store/actions/event.actions';
import { LoadAllEventsEmployed } from 'src/app/store/actions/events-employed.actions';
import { LoadEventsSignedUp, LoadEventsSignedUpForUser } from 'src/app/store/actions/events-signed-up.actions';
import { NeedUserInfoAction } from 'src/app/store/actions/user-info.actions';
import { selectLoggedUser } from 'src/app/store/selectors/auth.selectors';
import { selectUserInfo } from 'src/app/store/selectors/user-info.selectors';

@Component({
  selector: 'app-korisnik',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  loggedUser$=this.store.pipe(
    select(selectLoggedUser),
    filter(val => val !== undefined)
  );

  user$=this.store.pipe(
    select(selectUserInfo),
    filter(val=> val!=undefined)
  )

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loggedUser$.subscribe(
      user => this.store.dispatch(new NeedUserInfoAction(user.email))
    )

    this.user$.subscribe( (userInfo: User) => {
      this.store.dispatch(new LoadEventsSignedUpForUser(userInfo.id));
    })
    this.store.dispatch(new LoadAllEvents());
    this.store.dispatch(new LoadAllEventsEmployed());
  }

}

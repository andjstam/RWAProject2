import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { LoadAllEvents } from 'src/app/store/actions/event.actions';
import { LoadAllEventsEmployed } from 'src/app/store/actions/events-employed.actions';
import { LoadEventsSignedUp } from 'src/app/store/actions/events-signed-up.actions';
import { NeedUserInfoAction } from 'src/app/store/actions/user-info.actions';
import { selectLoggedUser } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-korisnik',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user$=this.store.pipe(
    select(selectLoggedUser),
    filter(val => val !== undefined)
  );

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => this.store.dispatch(new NeedUserInfoAction(user.email))
    )
    this.store.dispatch(new LoadAllEvents());
    this.store.dispatch(new LoadEventsSignedUp());
    this.store.dispatch(new LoadAllEventsEmployed());
  }

}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { NeedDirectorInfo } from 'src/app/store/actions/director.actions';
import { LoadDirectorsEvents } from 'src/app/store/actions/event.actions';
import { AppState } from 'src/app/store';
import { selectLoggedUser } from 'src/app/store/selectors/auth.selectors';
import { selectDirectorInfo } from 'src/app/store/selectors/director.selector';
import { LoadAllUsers } from 'src/app/store/actions/user.actions';
import { LoadEventsSignedUp } from 'src/app/store/actions/events-signed-up.actions';
import { LoadAllEventsEmployed } from 'src/app/store/actions/events-employed.actions';


@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  user$=this.store.pipe(
    select(selectLoggedUser),
    filter(val => val !== undefined)
  );

  director$=this.store.pipe(
    select(selectDirectorInfo),
    filter(val => val !== undefined)
  );
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => this.store.dispatch(new NeedDirectorInfo(user.email))
    )
    this.director$.subscribe( director =>{
      this.store.dispatch(new LoadDirectorsEvents(director.id))
    })
    this.store.dispatch(new LoadAllUsers());
    this.store.dispatch(new LoadEventsSignedUp);
    this.store.dispatch(new LoadAllEventsEmployed)
  }

}

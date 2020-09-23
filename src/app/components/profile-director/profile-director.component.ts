import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { filter } from 'rxjs/operators';
import {  selectDirectorInfo } from 'src/app/store/selectors/director.selector';
import { selectAllEvents } from '../../store/selectors/event.selectors'
import { DeleteEvent } from 'src/app/store/actions/event.actions';
import { Event } from '../../models/Event'
import { EventToUpdate } from 'src/app/store/actions/event-to-update.actions';
import { Director } from 'src/app/models/Director';
import { selectAllEventsSigned } from 'src/app/store/selectors/events-signed-up.selectors';

@Component({
  selector: 'app-profil-reziser',
  templateUrl: './profile-director.component.html',
  styleUrls: ['./profile-director.component.css']
})
export class ProfileDirectorComponent implements OnInit {
  displayEventModal:boolean;
  allEvents: Event[] = [];
  isUpdating: boolean;
  director: Director={
    id: undefined,
    name: '',
    surname: '',
    email: '',
    sertificate: ''
  }

  director$=this.store.pipe(
    select(selectDirectorInfo),
    filter(val => val !== undefined)
  );

  eventsSignedUp$=this.store.pipe(
    select(selectAllEventsSigned),
    filter(val => val !== undefined)
  );
  
  constructor(private store: Store<AppState>) { 
    this.displayEventModal=false;
    this.isUpdating=false;
  }

  ngOnInit(): void {
    
    this.director$.subscribe( (director: Director) => this.director={...director})

    this.store.select(selectAllEvents).subscribe((response) => {
      this.allEvents = response as Event[]
    });

  }

  createNewEventClicked(){
    this.displayEventModal=true;
    this.isUpdating=false;
  }

  hideEventModal(){
    this.displayEventModal=false;
  }

  onUpdateClick(event : Event){
    this.displayEventModal=true;
    this.isUpdating=true;
    this.store.dispatch(new EventToUpdate(event));
  }

  onDeleteClick(event: Event){
    this.store.dispatch( new DeleteEvent(event));
  }

  showSignedUsers(event : Event){
    // this.eventsSignedUp$.pipe(
    //   filter(ev=>)
    // )
  }
}

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
import { User } from 'src/app/models/User';
import { selectAllUsers } from 'src/app/store/selectors/user.selectors';
import { EventSignedEmplyed } from 'src/app/models/EventSignedEmployed';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-profil-reziser',
  templateUrl: './profile-director.component.html',
  styleUrls: ['./profile-director.component.css']
})
export class ProfileDirectorComponent implements OnInit {
  allUsers: User[]=[];
  signedUsers: User[]=[]; //popunjavamo u odnosu na EventsSignedUp$
  objectSignedEvents: EventSignedEmplyed[]=[];
  idsSignedUsers: number[]=[];
  idEvent:number;

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

  allUsers$=this.store.pipe(
    select(selectAllUsers),
    filter(val => val !== undefined)
  )

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
    
    this.allUsers$.subscribe( users =>{
      users.forEach(user => this.allUsers.push(user))
    })
 
    this.eventsSignedUp$.subscribe((events) =>{
        events.forEach(eventSigned =>{
          this.objectSignedEvents.push(eventSigned)
        })
    })
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
    this.idEvent=event.id;
    this.signedUsers=[];
    this.idsSignedUsers=[];

    this.objectSignedEvents.forEach(object => {
      if(object.event===this.idEvent)
        this.idsSignedUsers.push(object.user)
    });

    if(this.idsSignedUsers.length){
      this.allUsers.forEach(user=>{
        this.idsSignedUsers.forEach(userId=>{
          if(user.id===userId)
            this.signedUsers.push(user);
        })
      })
    }
    else alert("Na ovom oglasu još uvek nema prijavljenih korisnika!")
  }
  
  closeSignedUsers(){
    this.signedUsers=[];
    this.idsSignedUsers=[];
  }
}

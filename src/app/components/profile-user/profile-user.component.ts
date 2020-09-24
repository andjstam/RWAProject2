import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { Event } from '../../models/Event'
import { AppState } from 'src/app/store';
import { selectAllEvents } from 'src/app/store/selectors/event.selectors';
import { selectAllEventsSigned } from 'src/app/store/selectors/events-signed-up.selectors';
import { selectUserInfo } from '../../store/selectors/user-info.selectors'
import { EventSignedEmplyed } from 'src/app/models/EventSignedEmployed';
import { DeleteOneEventSignedUp } from 'src/app/store/actions/events-signed-up.actions';
import { UpdateUserInfoAction } from 'src/app/store/actions/user-info.actions';

@Component({
  selector: 'app-profil-korisnik',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  allEvents: Event[]=[];

  signedEvents: Event[]=[];
  objectsSignedEvents: EventSignedEmplyed[]=[];
  user: User = {
    id: undefined,
    name: '',
    surname: '',
    email: '',
    type: '',
    grade: null,
    status: '',
    workPlace: ''
  };

  userInfo$=this.store.pipe(
    select(selectUserInfo),
    filter(val => val!=undefined)
  )

  events$=this.store.pipe(
    select(selectAllEvents),
    filter(val => val !== undefined)
  )

  eventsSignedUp$=this.store.pipe(
    select(selectAllEventsSigned),
    filter(val => val !== undefined)
  );

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userInfo$.subscribe((user: User) => this.user={...user} );
    this.events$.subscribe(
      (events) => events.forEach(evnet =>  this.allEvents.push(evnet))
    )
  
    this.eventsSignedUp$.subscribe((events) =>{
      events.forEach(eventSigned => this.objectsSignedEvents.push(eventSigned))
    
      if(this.objectsSignedEvents.length!=0){
        this.allEvents.forEach(event=>{
          this.objectsSignedEvents.forEach(object => {
            if(event.id===object.event)
              this.signedEvents.push(event);
          })
      })}
      else {
        if(this.user.status!="slobodan"){
          this.user.status="slobodan";
          if(this.user.id!=undefined)
            this.store.dispatch(new UpdateUserInfoAction(this.user));
        }
      }
    })

  }

  signOutOfEvent(event: Event){
    let idToDelete: number;
    this.objectsSignedEvents.forEach(signedEvent=>{
      if(signedEvent.event===event.id && signedEvent.user===this.user.id){
        idToDelete=signedEvent.id
      }
    })

    this.objectsSignedEvents=[];
    this.signedEvents=[];
    this.store.dispatch(new DeleteOneEventSignedUp(idToDelete));
  }
  
}

import { Component, OnInit } from '@angular/core';
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
  ).subscribe((events) =>{
      events.forEach(eventSigned =>{
        if(eventSigned.user==this.user.id)
          this.objectsSignedEvents.push(eventSigned);
        })

      this.allEvents.forEach((event, indexOf )=>{
        this.objectsSignedEvents.forEach(id =>{
          if(event.id === id.event)
            this.signedEvents.push(event);
        })
      })
    })

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userInfo$.subscribe((user: User) => this.user={...user} );
    this.events$.subscribe(
      (events) => events.forEach(evnet =>  this.allEvents.push(evnet))
    )

    // this.eventsSignedUp$.subscribe((events) =>{
    //   events.forEach(eventSigned =>{
    //     if(eventSigned.user==this.user.id)
    //       this.objectsSignedEvents.push(eventSigned);
    //     })

    //   this.allEvents.forEach((event, indexOf )=>{
    //     this.objectsSignedEvents.forEach(id =>{
    //       if(event.id === id.event)
    //         this.signedEvents.push(event);
    //     })
    //   })
    // })
  }

  signOutOfEvent(event: Event){
    let idToDelete: number;
    this.objectsSignedEvents.forEach(signedEvent=>{
      if(signedEvent.event===event.id && signedEvent.user===this.user.id){
        idToDelete=signedEvent.id
      }
    })
    this.store.dispatch(new DeleteOneEventSignedUp(idToDelete));
  }

}

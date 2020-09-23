import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Event } from 'src/app/models/Event';
import { User } from 'src/app/models/User';
import { AppState } from 'src/app/store';
import { selectAllEvents } from 'src/app/store/selectors/event.selectors';
import { selectUserInfo } from '../../store/selectors/user-info.selectors'
import { EventSignedEmplyed } from '../../models/EventSignedEmployed'
import { UserService } from 'src/app/services/user.service';
import { AddEventSignedUp } from 'src/app/store/actions/events-signed-up.actions';
import { UpdateUserInfoAction } from 'src/app/store/actions/user-info.actions';
import { selectAllEventsSigned } from '../../store/selectors/events-signed-up.selectors'

@Component({
  selector: 'app-pretraga-oglasi',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit {
  allEvents: Event[]=[];
  signedEvents: Event[]=[];
  filteredEvents: Event[]=[];
  idsSignedEvents: number[]=[];
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

  _inputFilter: string;
  get inputFilter(){
    return this._inputFilter;
  }
  set inputFilter(value:string){
    this._inputFilter=value;
    this.filteredEvents= this.inputFilter ? this.filter(this.inputFilter) : this.allEvents;
  }

  userInfo$=this.store.pipe(
    select(selectUserInfo),
    filter(val => val !== undefined)
  );

  events$=this.store.pipe(
    select(selectAllEvents),
    filter(val => val !== undefined)
  )

  eventsSignedUp$=this.store.pipe(
    select(selectAllEventsSigned),
    filter(val => val !== undefined)
  );

  constructor(private store: Store<AppState>, private userService: UserService) { }

  ngOnInit(): void {
    this.events$.subscribe(
      (events) => events.forEach(u => { this.allEvents.push(u); }))
    this.filteredEvents=this.allEvents;
    this.userInfo$.subscribe((user: User) => this.user={...user} );

    this.eventsSignedUp$.subscribe((events) =>{
      events.forEach(eventSigned =>{
        if(eventSigned.user==this.user.id)
          this.idsSignedEvents.push(eventSigned.event);
        })

      this.allEvents.forEach((event, indexOf )=>{
        this.idsSignedEvents.forEach(id =>{
          if(event.id === id){
            this.signedEvents.push(event);
            //this.allEvents.splice(indexOf);
          }
        })
      })
    })

  }

  filter(filterBy: string): Event[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.allEvents.filter( (korisnik: Event)=>
        korisnik.userType.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  signToEvent(event: Event){
    if(event.userType===this.user.type){
      let eventSigned= new EventSignedEmplyed(event.id, this.user.id);
      this.store.dispatch(new AddEventSignedUp(eventSigned));
      if(this.user.status!="u procesu"){
        this.user.status="u procesu"
        this.store.dispatch(new UpdateUserInfoAction(this.user));
      }
    }
    else alert('Ne možete se prijaviti na dati event jer ovaj event zahteva drugu vrstu korisnika. Žao nam je!')
  }

}

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { selectLoggedUser } from '../../store/selectors/auth.selectors';
import { filter } from 'rxjs/operators';
import { NeedDirectorInfo } from 'src/app/store/actions/director.actions';
import {  selectDirectorInfo } from 'src/app/store/selectors/director.selector';
import { selectAllEvents } from '../../store/selectors/event.selectors'
import { DirectorService } from 'src/app/services/director.service';
import { DeleteEvent, LoadDirectorsEvents } from 'src/app/store/actions/event.actions';
import { Event } from '../../models/event'

@Component({
  selector: 'app-profil-reziser',
  templateUrl: './profile-director.component.html',
  styleUrls: ['./profile-director.component.css']
})
export class ProfileDirectorComponent implements OnInit {
  displayEventModal:boolean;
  allEvents: Event[] = [];
  isUpdating: boolean;
  name: string;
  email: string;
  sertificate: string;

  user$=this.store.pipe(
    select(selectLoggedUser),
    filter(val => val !== undefined)
  );

  director$=this.store.pipe(
    select(selectDirectorInfo),
    filter(val => val !== undefined)
  );
  

  constructor(private store: Store<AppState>, private directorService: DirectorService) { 
    this.displayEventModal=false;
    this.isUpdating=false;
  }

  ngOnInit(): void {
    this.user$.subscribe(
      user => this.store.dispatch(new NeedDirectorInfo(user.email))
    )
    this.director$.subscribe( director =>{
        this.name=director.name + " "+ director.surname;
        this.email=director.email;
        this.sertificate=director.sertificate;
        this.store.dispatch(new LoadDirectorsEvents(director.id))
     }
    )

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
  }

  onDeleteClick(event: Event){
    this.store.dispatch( new DeleteEvent(event));
  }

}

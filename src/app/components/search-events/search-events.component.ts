import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Event } from 'src/app/models/Event';
import { AppState } from 'src/app/store';
import { selectAllEvents } from 'src/app/store/selectors/event.selectors';

@Component({
  selector: 'app-pretraga-oglasi',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit {
  allEvents: Event[]=[];
  filteredEvents: Event[]=[];

  _inputFilter: string;
  get inputFilter(){
    return this._inputFilter;
  }
  set inputFilter(value:string){
    this._inputFilter=value;
    this.filteredEvents= this.inputFilter ? this.filtriraj(this.inputFilter) : this.allEvents;
  }

  events$=this.store.pipe(
    select(selectAllEvents),
    filter(val => val !== undefined)
  )

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.events$.subscribe(
      (events) => events.forEach(u => { this.allEvents.push(u); }))
    this.filteredEvents=this.allEvents;
    
  }

  filtriraj(filterBy: string): Event[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.allEvents.filter( (korisnik: Event)=>
        korisnik.userType.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

}

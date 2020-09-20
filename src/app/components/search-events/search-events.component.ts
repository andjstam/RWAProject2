import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/Event';
import { NewEvent } from 'src/app/store/actions/event.actions';
import { UserService } from '../../services/user.service'

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllEvents()
    .subscribe((events: Event[]) =>
        //this.allEvents= {...events};
        events.forEach(ev => this.allEvents.push(ev)),
        err => {
          console.log(err.message);
          alert(`Ne radi get`);
        });
      this.filteredEvents=this.allEvents;
      console.log(this.allEvents)
      console.log('on init end');
  }

  filtriraj(filterBy: string): Event[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.allEvents.filter( (korisnik: Event)=>
        korisnik.userType.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

}

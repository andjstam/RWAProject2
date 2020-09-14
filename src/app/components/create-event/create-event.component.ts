import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { NewEvent } from 'src/app/store/actions/event.actions';
import { AppState } from 'src/app/store/reducers';
import { selectDirectorId } from 'src/app/store/selectors/director.selector';
import { Event } from "../../models/event"

@Component({
  selector: 'create-oglas',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event: Event = {
    id: undefined,
    name: '',
    description: '',
    userType: '',
    userCount: null,
    directorId: null
  };

  directorId$=this.store.select(selectDirectorId);

  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();
  @Input() isUpdating: boolean;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log("isUpdating: "+ this.isUpdating)
  }
  
  cancelModal(): void {
    this.cancelClicked.emit();
  }

  handleClick(): void {
    if(this.isUpdating){

    }
    else
    {
      this.directorId$.subscribe(id =>{
          this.event.directorId=id;
          this.store.dispatch(new NewEvent(this.event))
        })
    }
    this.cancelModal();
  }
 
}

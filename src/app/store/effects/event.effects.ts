import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect} from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { map, mergeMap } from 'rxjs/operators';
import { DirectorService } from 'src/app/services/director.service';
import { DeleteEvent, DeleteEventSuccess, EventActionTypes, LoadDirectorsEvents, NewEvent } from '../actions/event.actions';
import { AppState } from '../reducers';


@Injectable()
export class EventEffects {

    getDirectorsEvents=createEffect(() => this.actions$.pipe(
        ofType<LoadDirectorsEvents>( EventActionTypes.LOAD_DIRECTORS_EVENTS),
        map((action) => action.directorId),
            mergeMap((directorId)=>this.directorService.getEventsByDirectorsId(directorId)
            .pipe(
            map((events)=>({
                type:EventActionTypes.LOAD_DIRECTORS_EVENTS_SUCCESS,
                payload: events
            })))
        )
    ))

    addNewEvent=createEffect(() => this.actions$.pipe(
        ofType<NewEvent>( EventActionTypes.NEW_EVENT),
        map((action) => action.payload),
            mergeMap((event)=>this.directorService.postEvent(event)
            .pipe(
            map((event)=>({
                type:EventActionTypes.NEW_EVENT_SUCCESS,
                payload: event
            })))
        )
    ))

    deleteOneEvent= createEffect(()=> this.actions$.pipe(
        ofType<DeleteEvent>( EventActionTypes.DELETE_EVENT),
        // map((action) => action.payload)
        // mergeMap( (action) => {
        //     this.directorService.deleteEvent(action.id);
        //     this.store.dispatch(new DeleteEventSuccess(action))
        // } )
    ))

  
      
    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private directorService : DirectorService) { }

}
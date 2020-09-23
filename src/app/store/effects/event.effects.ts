import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { noop } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { DirectorService } from 'src/app/services/director.service';
import { EventToUpdateTypes } from '../actions/event-to-update.actions';
import { DeleteEvent, EventActionTypes, LoadAllEvents, LoadDirectorsEvents, NewEvent, UpdateEvent } from '../actions/event.actions';
import { UserService } from 'src/app/services/user.service';


@Injectable()
export class EventEffects {

    getAllEvents=createEffect(()=> this.actions$.pipe(
        ofType<LoadAllEvents>(EventActionTypes.LOAD_ALL_EVENTS),
        mergeMap(()=>this.userService.getAllEvents().pipe(
        map((events)=>({
            type:EventActionTypes.LOAD_ALL_EVENTS_SUCCESS,
            payload: events
        })))
    )))

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

    updateEvent= createEffect(() => this.actions$.pipe(
        ofType<UpdateEvent>( EventActionTypes.UPDATE_EVENT),
        mergeMap((event)=>this.directorService.updateEvent(event.payload.id, event.payload)
        .pipe(
        map((event)=>({
            type:EventToUpdateTypes.DELETE_EVENT_TO_UPDATE,
        })))
    )))

    @Effect({dispatch:false})
    deleteOneEvent = this.actions$.pipe(
        ofType<DeleteEvent>(EventActionTypes.DELETE_EVENT),
        tap(action => this.directorService.deleteEvent(action.payload.id)
        .subscribe(
            noop,
            err => alert("Doslo je do greske pri brisanju eventa iz baze!")
        ))
    );


    constructor(private actions$: Actions,
                private directorService : DirectorService,
                private userService: UserService) { }

}
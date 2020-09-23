import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import { UserService } from 'src/app/services/user.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { AddEventSignedUp, DeleteOneEventSignedUp, EventsSignedUpActionTypes, LoadEventsSignedUp } from '../actions/events-signed-up.actions';
import { EventSignedEmplyed } from 'src/app/models/EventSignedEmployed';
import { noop } from 'rxjs';

@Injectable()
export class EventsSignedUpEffects {

    getAllEventsSignedUp=createEffect(()=> this.actions$.pipe(
        ofType<LoadEventsSignedUp>(EventsSignedUpActionTypes.LOAD_EVENTS_SIGNED_UP),
        mergeMap(()=>this.userService.getAllEventSigned().pipe(
        map((events)=>({
            type:EventsSignedUpActionTypes.LOAD_EVENTS_SIGNED_UP_SUCCESS,
            payload: events
        })))
    )))

    addEventsSignedUp=createEffect(()=> this.actions$.pipe(
        ofType<AddEventSignedUp>(EventsSignedUpActionTypes.ADD_EVENT_SIGNED_UP),
        map(action => action.payload),
            mergeMap((event)=>this.userService.postEventSigned(event).pipe(
            map((events)=>({
                type:EventsSignedUpActionTypes.ADD_EVENT_SIGNED_UP_SUCCESS,
                payload: events
            })))
    )))

    @Effect({dispatch:false})
    deleteOneEvent = this.actions$.pipe(
        ofType<DeleteOneEventSignedUp>(EventsSignedUpActionTypes.DELETE_ONE_EVENT_SIGNED_UP),
        tap(action => this.userService.deletEventSigned(action.idObject)
        .subscribe(
            noop,
            err => alert("Doslo je do greske pri brisanju eventa iz baze!")
        ))
    );

    constructor(private actions$: Actions,
        private userService: UserService) { }
}
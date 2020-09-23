import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { EventsEmployedActionTypes, LoadAllEventsEmployed} from '../actions/events-employed.actions'

@Injectable()
export class EventsEmployedEffects {

    getAllEventsSignedUp=createEffect(()=> this.actions$.pipe(
        ofType<LoadAllEventsEmployed>(EventsEmployedActionTypes.LOAD_ALL_EVENTS_EMPLOYED),
        mergeMap(()=>this.userService.getAllEventsEmployed().pipe(
        map((events)=>({
            type:EventsEmployedActionTypes.LOAD_ALL_EVENTS_EMPLOYED_SUCCESS,
            payload: events
        })))
    )))

    constructor(private actions$: Actions,
        private userService: UserService) { }
}
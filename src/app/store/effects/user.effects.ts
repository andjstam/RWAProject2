import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, tap } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { DirectorService } from 'src/app/services/director.service';
import { AppState } from '..';
import { LoadAllUsers, UserActionTypes} from '../actions/user.actions'


@Injectable()
export class UserEffects {

    getAllUsers=createEffect(() => this.actions$.pipe(
        ofType<LoadAllUsers>( UserActionTypes.LOAD_ALL_USERS),
        mergeMap(()=>this.directorService.getAllUsers()
        .pipe(
        map((users: User[])=>({
            type:UserActionTypes.LOAD_ALL_USERS_SUCCESS,
            payload: users
        })))
        )
    ))
    
    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private directorService : DirectorService) { }
}

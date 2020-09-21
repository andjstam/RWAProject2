import { Injectable } from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import { DirectorService } from 'src/app/services/director.service';
import { DirectorActionTypes, NeedDirectorInfo } from '../actions/director.actions';
import {  mergeMap, map } from 'rxjs/operators';
import { AppState } from '..';
import { Store, select } from '@ngrx/store';

@Injectable()
export class DirectorEffects {


  getUserById=createEffect(() => this.actions$.pipe(
    ofType<NeedDirectorInfo>( DirectorActionTypes.NEED_INFO_ACTION),
    map((action)=>action.email),
        mergeMap((email)=>this.directorService.getDirectorByEmail(email)
        .pipe(
            map((user)=>({
                type:DirectorActionTypes.GET_INFO_ACTION,
                director:user[0]
            })))
        )
    ))
  
    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private directorService: DirectorService) { }

}
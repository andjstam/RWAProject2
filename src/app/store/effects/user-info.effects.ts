import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect} from '@ngrx/effects';
import { UserService } from '../../services/user.service'
import {  mergeMap, map } from 'rxjs/operators';
import { NeedUserInfoAction, UserInfoActionTypes } from '../actions/user-info.actions'
import { User } from 'src/app/models/User';

@Injectable()
export class UserInfoEffects {


  getUserById=createEffect(() => this.actions$.pipe(
    ofType<NeedUserInfoAction>( UserInfoActionTypes.NEED_USER_INFO_ACTION),
    map((action)=>action.email),
        mergeMap((email)=>this.userService.getUserByEmail(email).pipe(
            map((user : User)=>({
                type:UserInfoActionTypes.GET_USER_INFO_ACTION,
                payload: user
            })))
        )
    ))
  
    constructor(private actions$: Actions,
                private userService: UserService) { }

}
import { Action } from '@ngrx/store';
import { User } from 'src/app/models/User';

export enum UserActionTypes {
  LOAD_ALL_USERS = '[User] Load All Users',
  LOAD_ALL_USERS_SUCCESS = '[User] Load All Users Success',
  
}

export class LoadAllUsers implements Action {
  readonly type = UserActionTypes.LOAD_ALL_USERS;
  constructor() {}
}

export class LoadAllUsersSucces implements Action {
  readonly type = UserActionTypes.LOAD_ALL_USERS_SUCCESS;
  constructor( public payload: User[]) {}
}


export type UserActions = LoadAllUsers | LoadAllUsersSucces;

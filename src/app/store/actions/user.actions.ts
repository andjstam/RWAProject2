import { Action } from '@ngrx/store';
import { User } from 'src/app/models/User';

export enum UserActionTypes {
  LOAD_ALL_USERS = '[User] Load All Users',
  LOAD_ALL_USERS_SUCCESS = '[User] Load All Users Success',
  REMOVE_SPECIFIC_USER='[User] Remove Spec User',
  DELETE_ALL_USERS = '[User] Delete All Users'
}

export class LoadAllUsers implements Action {
  readonly type = UserActionTypes.LOAD_ALL_USERS;
  constructor() {}
}

export class LoadAllUsersSucces implements Action {
  readonly type = UserActionTypes.LOAD_ALL_USERS_SUCCESS;
  constructor( public payload: User[]) {}
}

export class RemoveSpecificUser implements Action {
  readonly type = UserActionTypes.REMOVE_SPECIFIC_USER;
  constructor(public payload: User) {}
}

export class DeleteAllUsers implements Action {
  readonly type = UserActionTypes.DELETE_ALL_USERS;
  constructor() {}
}


export type UserActions = LoadAllUsers 
| LoadAllUsersSucces 
| RemoveSpecificUser
| DeleteAllUsers;

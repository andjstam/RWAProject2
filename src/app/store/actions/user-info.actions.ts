import { Action } from '@ngrx/store';
import { User } from '../../models/User';

export enum UserInfoActionTypes {
  NEED_USER_INFO_ACTION = '[User Profile Page] Load User Info',
  GET_USER_INFO_ACTION ='[User Profile Page] Getting User Info',
  DELETE_USER_INFO_ACTION ='[User Logged Out]'
}

export class NeedUserInfoAction implements Action {
  readonly type = UserInfoActionTypes.NEED_USER_INFO_ACTION;
  constructor(public email:string){}
}

export class GetUserInfoAction implements Action {
  readonly type = UserInfoActionTypes.GET_USER_INFO_ACTION;
  constructor(public payload: User) {}
}

export class DeleteUserInfoAction implements Action {
  readonly type = UserInfoActionTypes.DELETE_USER_INFO_ACTION;
}


export type UserInfoActions = NeedUserInfoAction | GetUserInfoAction | DeleteUserInfoAction;

import { Action } from '@ngrx/store';
import { User } from '../../models/User'
import { UserInfoActions, UserInfoActionTypes } from '../actions/user-info.actions';

export const userInfoFeatureKey = 'userInfo';

export interface UserInfoState {
  userInfo: User
}

export const initialState: UserInfoState = {
  userInfo: undefined
};

export function userInfoReducer(state = initialState, action: UserInfoActions): UserInfoState {
  switch (action.type) {

    case(UserInfoActionTypes.GET_USER_INFO_ACTION):
    return {
      userInfo: action.payload
    }

    case(UserInfoActionTypes.DELETE_USER_INFO_ACTION):
    return{
      userInfo: undefined
    }

    default:
      return state;
  }
}

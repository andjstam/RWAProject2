import { Action } from '@ngrx/store';
import { RegUser } from 'src/app/models/reg-user';
import { AuthActionTypes, AuthActions } from './auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  loggedIn: boolean,
  user : RegUser
}

export const initialState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      };
    case AuthActionTypes.LogoutAction:
      return {
        loggedIn : false,
        user: undefined
      };

    default:
      return state;
  }
}

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RegUser } from '../models/reg-user';
import { AuthActionTypes } from '../login/auth.actions';

type AuthState = {
  loggedIn: boolean,
  user : RegUser
}

export interface AppState {
  auth: AuthState
}

function authReducer(state: AuthState, action): AuthState {
  switch (action.type) {

    case AuthActionTypes.LoginAction:
    return {
      loggedIn: true,
      user: action.payload.user
    };

    default:
    return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

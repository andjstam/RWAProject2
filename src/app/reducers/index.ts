import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RegUser } from '../models/reg-user';
import { AuthActionTypes } from '../components/login/auth.actions';

type AuthState = {
  loggedIn: boolean,
  user : RegUser
}

const initialAuthState : AuthState ={
  loggedIn: false,
  user: undefined
}

export interface AppState {
  auth: AuthState
}

function authReducer(state:AuthState = initialAuthState, action): AuthState {
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

import { Action, createSelector } from '@ngrx/store';
import { LoggedUser} from 'src/app/models/logged-user';
import { AuthActionTypes, AuthActions } from '../actions/auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  loggedIn: boolean,
  user : LoggedUser
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

export const selectAuthState = state => state.auth;

export const isLoggedIn = createSelector(
    selectAuthState,
    auth => auth.loggedIn
);

export const selectLoggedUser = createSelector(
    selectAuthState,
    auth => <LoggedUser>auth.user
)

export const selectUserId= createSelector(
    selectLoggedUser,
    user => user.id
)
import {createSelector} from '@ngrx/store';
import { RegUser } from 'src/app/models/reg-user';

export const selectAuthState = state => state.auth;

export const isLoggedIn = createSelector(
    selectAuthState,
    auth => auth.loggedIn
);

export const selectLoggedUser = createSelector(
    selectAuthState,
    auth => <RegUser>auth.user
)
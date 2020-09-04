import {createSelector} from '@ngrx/store';

export const selectAuthState= state => state.auth;

export const isLoggedIn = createSelector(
    selectAuthState,
    auth => auth.loggedIn
);

export const loggedUserRole = createSelector(
    selectAuthState,
    auth => auth.user.role
)
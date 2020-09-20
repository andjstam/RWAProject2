import { createSelector } from '@ngrx/store';
import { LoggedUser} from '../../models/LoggedUser';

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
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as FromEvents from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<FromEvents.UserState>(
  'users'
);

export const selectAllUsers = createSelector(
  selectUserState,
  FromEvents.selectAll
);
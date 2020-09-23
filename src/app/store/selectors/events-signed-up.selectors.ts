import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as FromEvents from '../reducers/events-signed-up.reducer';

export const selectEventsSignedUpState = createFeatureSelector<FromEvents.EventsSignedUpState>(
  'eventsSignedUp'
);

export const selectAllEventsSigned = createSelector(
    selectEventsSignedUpState,
    FromEvents.selectAll
);


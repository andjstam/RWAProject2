import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as FromEvents from '../reducers/events.reducer';

export const selectEventsState = createFeatureSelector<FromEvents.EventsState>(
  'events'
);

export const selectAllEvents = createSelector(
  selectEventsState,
  FromEvents.selectAll
);

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {AuthState, authReducer} from './auth.reducer';
import {DirectorState, directorReducer} from '../reducers/director.reducer'
import {EventsState, eventReducer} from '../reducers/events.reducer'
import { EventToUpdateState, eventToUpdateReducer} from '../reducers/event-to-update.reducer'


export interface AppState {
  auth: AuthState,
  director: DirectorState,
  events: EventsState,
  eventToUpdate: EventToUpdateState;
}


export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  director: directorReducer,
  events: eventReducer,
  eventToUpdate: eventToUpdateReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

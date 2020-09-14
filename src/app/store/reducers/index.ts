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


export interface AppState {
  auth: AuthState,
  director: DirectorState,
  events: EventsState
}


export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  director: directorReducer,
  events: eventReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

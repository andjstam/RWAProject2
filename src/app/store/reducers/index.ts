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


export interface AppState {
  auth: AuthState,
  director: DirectorState
}


export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  director: directorReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

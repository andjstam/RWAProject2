import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {AuthState, authReducer} from './reducers/auth.reducer';
import {DirectorState, directorReducer} from './reducers/director.reducer'
import {EventsState, eventReducer} from './reducers/events.reducer'
import { EventToUpdateState, eventToUpdateReducer} from './reducers/event-to-update.reducer'
import { UserState, userReducer} from './reducers/user.reducer'
import { UserInfoState, userInfoReducer} from './reducers/user-info.reducer'


export interface AppState {
  auth: AuthState,
  director: DirectorState,
  userInfo: UserInfoState,
  events: EventsState,
  eventToUpdate: EventToUpdateState,
  users: UserState;
}


export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  director: directorReducer,
  userInfo: userInfoReducer,
  events: eventReducer,
  eventToUpdate: eventToUpdateReducer,
  users: userReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

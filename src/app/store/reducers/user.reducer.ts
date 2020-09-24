import { Action } from '@ngrx/store';
import { User } from '../../models/User'
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { UserActions, UserActionTypes } from '../actions/user.actions';


export interface UserState extends EntityState<User> {}

export const userAdapter : EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState= userAdapter.getInitialState();


export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {

    case ( UserActionTypes.LOAD_ALL_USERS_SUCCESS):
      return userAdapter.addMany(action.payload, state);

    case (UserActionTypes.REMOVE_SPECIFIC_USER):
      return userAdapter.removeOne(action.payload.id, state)

    case (UserActionTypes.DELETE_ALL_USERS):
      return userAdapter.removeAll(state)

    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = userAdapter.getSelectors();

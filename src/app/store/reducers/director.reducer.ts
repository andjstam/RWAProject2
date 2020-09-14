import { Action, createSelector } from '@ngrx/store';
import { DirectorActionTypes, DirectorActions } from '../actions/director.actions';
import { Director } from 'src/app/models/director';


export const directorFeatureKey = 'director';

export interface DirectorState {
  director: Director
}

export const initialState: DirectorState = {
  director: undefined
};

export function directorReducer(state = initialState, action: DirectorActions): DirectorState {
  switch (action.type) {

    case(DirectorActionTypes.GET_INFO_ACTION):
    return {
      director: action.director
    };

    case(DirectorActionTypes.DELETE_INFO_ACTION):
    return {
      director: undefined
    };

    default:
      return state;
  }
}


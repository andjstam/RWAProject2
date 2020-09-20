import {
  EventToUpdate,
  EventToUpdateActions,
  EventToUpdateTypes,
} from '../actions/event-to-update.actions';
import { Event } from '../../models/Event';

export interface EventToUpdateState {
  event: Event;
}

export const initialState: EventToUpdateState = {
  event: undefined
}

export function eventToUpdateReducer( state = initialState, action: EventToUpdateActions): EventToUpdateState
{
  switch (action.type) {
    case EventToUpdateTypes.SET_EVENT_TO_UPDATE:
      return {
        event: action.payload
      }
    case EventToUpdateTypes.DELETE_EVENT_TO_UPDATE:
      return {
        event: undefined
      }
    default:
      return state;
  }
}

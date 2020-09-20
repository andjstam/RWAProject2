import { Action } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { EventActions, EventActionTypes } from '../actions/event.actions';
import { Event } from '../../models/Event'


export interface EventsState extends EntityState<Event> {}

export const adapter : EntityAdapter<Event> = createEntityAdapter<Event>();

export const initialState: EventsState= adapter.getInitialState();

export function eventReducer(state = initialState, action: EventActions): EventsState {
  switch (action.type) {

    case EventActionTypes.LOAD_ALL_EVENTS_SUCCESS:
      return adapter.addMany( action.payload, state );

    case EventActionTypes.LOAD_DIRECTORS_EVENTS_SUCCESS:
      return adapter.addMany( action.payload, state );

    case EventActionTypes.NEW_EVENT_SUCCESS:
      return adapter.addOne(action.payload, state);

    case EventActionTypes.DELETE_EVENT:
      return adapter.removeOne(action.payload.id, state);

    case EventActionTypes.DELETE_ALL_EVENTS:
      return adapter.removeAll(state);

    case EventActionTypes.UPDATE_EVENT: {
        const { id, ...changes } = action.payload;
        return adapter.updateOne({ id, changes: { ...changes } }, state);
      } 
    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapter.getSelectors();

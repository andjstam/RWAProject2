import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { EventSignedEmplyed } from '../../models/EventSignedEmployed';
import { EventsEmployedActions, EventsEmployedActionTypes} from '../actions/events-employed.actions'


export const eventsEmployedFeatureKey = 'eventsEmployed';

export interface EventsEmployedState extends EntityState<EventSignedEmplyed> {}

export const adapter : EntityAdapter<EventSignedEmplyed> = createEntityAdapter<EventSignedEmplyed>();

export const initialState: EventsEmployedState = adapter.getInitialState();

export function eventsEmployedReducer(state = initialState, action: EventsEmployedActions): EventsEmployedState {
  switch (action.type) {

    case(EventsEmployedActionTypes.LOAD_ALL_EVENTS_EMPLOYED_SUCCESS):
      return adapter.addMany(action.payload, state);

    case(EventsEmployedActionTypes.DELETE_ALL_EVENTS_EMPLOYED):
      return adapter.removeAll(state);

    case(EventsEmployedActionTypes.ADD_EVENT_EMPLOYED):
      return adapter.addOne(action.payload, state);

    case(EventsEmployedActionTypes.DELETE_ONE_EVENT_EMPLOYED):
      return adapter.removeOne(action.payload.id, state);

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
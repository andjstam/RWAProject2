
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { EventSignedEmplyed} from '../../models/EventSignedEmployed'
import { EventsSignedUpActions, EventsSignedUpActionTypes } from '../actions/events-signed-up.actions';


export const eventsSignedUpFeatureKey = 'evetnSignedUp';

export interface EventsSignedUpState extends EntityState<EventSignedEmplyed> {}

export const adapter : EntityAdapter<EventSignedEmplyed> = createEntityAdapter<EventSignedEmplyed>();

export const initialState: EventsSignedUpState= adapter.getInitialState();


export function eventsSignedUpReducer(state = initialState, action: EventsSignedUpActions): EventsSignedUpState {
  switch (action.type) {

    case(EventsSignedUpActionTypes.LOAD_EVENTS_SIGNED_UP_SUCCESS):
      return adapter.addMany(action.payload, state);

    case(EventsSignedUpActionTypes.LOAD_EVENTS_SIGNED_UP_FOR_USER_SUCCESS):
      return adapter.addMany(action.payload, state);

    case (EventsSignedUpActionTypes.DELETE_ALL_EVENTS_SIGNED_UP):
      return adapter.removeAll(state);

    case (EventsSignedUpActionTypes.ADD_EVENT_SIGNED_UP_SUCCESS):
      return adapter.addOne( action.payload , state);

    case (EventsSignedUpActionTypes.DELETE_ONE_EVENT_SIGNED_UP):
      return adapter.removeOne(action.idObject , state);

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
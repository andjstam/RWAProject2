import { Action } from '@ngrx/store';
import { EventSignedEmplyed } from '../../models/EventSignedEmployed';

export enum EventsEmployedActionTypes {
  LOAD_ALL_EVENTS_EMPLOYED = '[EventsEmployed] Load All EventsEmployed',
  LOAD_ALL_EVENTS_EMPLOYED_SUCCESS = '[EventsEmployed] Load All EventsEmployed Success',
  DELETE_ALL_EVENTS_EMPLOYED='[EventsEmployed] Delete All EventsEmployed',
  ADD_EVENT_EMPLOYED='[EventsEmployed] Add  One EventsEmployed',
  ADD_EVENT_EMPLOYED_SUCCESS='[EventsEmployed] Add One EventsEmployedSuccess',
  DELETE_ONE_EVENT_EMPLOYED='[EventsEmployed] Delete One EventsEmployed',
}

export class LoadAllEventsEmployed implements Action {
  readonly type = EventsEmployedActionTypes.LOAD_ALL_EVENTS_EMPLOYED;
  constructor(){}
}

export class LoadAllEventsEmployedSuccess implements Action {
  readonly type = EventsEmployedActionTypes.LOAD_ALL_EVENTS_EMPLOYED_SUCCESS;
  constructor(public payload: EventSignedEmplyed[]) {}
}

export class DeleteAllEventsEmployed implements Action {
  readonly type = EventsEmployedActionTypes.DELETE_ALL_EVENTS_EMPLOYED;
  constructor() {}
}

export class AddEventEmployed implements Action {
  readonly type = EventsEmployedActionTypes.ADD_EVENT_EMPLOYED;
  constructor(public payload: EventSignedEmplyed) {}
}

export class AddEventEmployedSuccess implements Action {
  readonly type = EventsEmployedActionTypes.ADD_EVENT_EMPLOYED_SUCCESS;
  constructor(public payload: EventSignedEmplyed) {}
}

export class DeleteOneEventEmployed implements Action {
  readonly type = EventsEmployedActionTypes.DELETE_ONE_EVENT_EMPLOYED;
  constructor(public payload: EventSignedEmplyed) {}
}

export type EventsEmployedActions = LoadAllEventsEmployed
| LoadAllEventsEmployedSuccess
| DeleteAllEventsEmployed
| AddEventEmployed
| AddEventEmployedSuccess
| DeleteOneEventEmployed;

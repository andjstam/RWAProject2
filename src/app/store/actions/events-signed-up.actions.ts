import { Action } from '@ngrx/store';
import { EventSignedEmplyed } from '../../models/EventSignedEmployed';

export enum EventsSignedUpActionTypes {
  LOAD_EVENTS_SIGNED_UP = '[EventsSignedUp] Load EventsSignedUp',
  LOAD_EVENTS_SIGNED_UP_SUCCESS = '[EventsSignedUp] Load EventsSignedUp Success',
  LOAD_EVENTS_SIGNED_UP_FOR_USER = '[EventsSignedUp] Load EventsSignedUp For User',
  LOAD_EVENTS_SIGNED_UP_FOR_USER_SUCCESS = '[EventsSignedUp] Load EventsSignedUp For User Success',
  DELETE_ALL_EVENTS_SIGNED_UP='[EventsSignedUp] Delete All EventsSignedUp',
  ADD_EVENT_SIGNED_UP='[EventsSignedUp] Add EventSignedUp',
  ADD_EVENT_SIGNED_UP_SUCCESS='[EventsSignedUp] Add EventSignedUp Success',
  DELETE_ONE_EVENT_SIGNED_UP='[EventsSignedUp] Delete One EventsSignedUp',
}

export class LoadEventsSignedUp implements Action {
  readonly type = EventsSignedUpActionTypes.LOAD_EVENTS_SIGNED_UP;
  constructor() {}
}

export class LoadEventsSignedUpSuccess implements Action {
  readonly type = EventsSignedUpActionTypes.LOAD_EVENTS_SIGNED_UP_SUCCESS;
  constructor(public payload: EventSignedEmplyed[]) {}
}

export class LoadEventsSignedUpForUser implements Action {
  readonly type = EventsSignedUpActionTypes.LOAD_EVENTS_SIGNED_UP_FOR_USER;
  constructor(public idUser: number) {}
}

export class LoadEventsSignedUpForUserSuccess implements Action {
  readonly type = EventsSignedUpActionTypes.LOAD_EVENTS_SIGNED_UP_FOR_USER_SUCCESS;
  constructor(public payload: EventSignedEmplyed[]) {}
}

export class DeleteAllEventsSignedUp implements Action {
  readonly type = EventsSignedUpActionTypes.DELETE_ALL_EVENTS_SIGNED_UP;
  constructor() {}
}

export class AddEventSignedUp implements Action {
  readonly type = EventsSignedUpActionTypes.ADD_EVENT_SIGNED_UP;
  constructor(public payload: EventSignedEmplyed ) { }
}

export class AddEventSignedUpSuccess implements Action {
  readonly type = EventsSignedUpActionTypes.ADD_EVENT_SIGNED_UP_SUCCESS;
  constructor(public payload : EventSignedEmplyed ){}
}

export class DeleteOneEventSignedUp implements Action {
  readonly type = EventsSignedUpActionTypes.DELETE_ONE_EVENT_SIGNED_UP;
  constructor(public idObject: number) {}
}


export type EventsSignedUpActions = LoadEventsSignedUp
| LoadEventsSignedUpSuccess 
| LoadEventsSignedUpForUser
| LoadEventsSignedUpForUserSuccess
| DeleteAllEventsSignedUp
| AddEventSignedUp
| AddEventSignedUpSuccess
| DeleteOneEventSignedUp;

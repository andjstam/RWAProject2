import { Action } from '@ngrx/store';
import { Event } from '../../models/Event'

export enum EventActionTypes {
  LOAD_ALL_EVENTS = '[Event] LOAD_ALL_EVENTS',
  LOAD_ALL_EVENTS_SUCCESS = '[Event] LOAD_ALL_EVENTS_SUCCESS',
  LOAD_DIRECTORS_EVENTS = '[Event] LOAD_DIRECTORS_EVENTS',
  LOAD_DIRECTORS_EVENTS_SUCCESS = '[Event] LOAD_DIRECTORS_EVENTS_SUCCESS',
  NEW_EVENT = '[Event] NEW_EVENT',
  NEW_EVENT_SUCCESS = '[Event] NEW_EVENT_SUCCESS',
  UPDATE_EVENT = '[Event] UPDATE_EVENT',
  DELETE_EVENT = '[Event] DELETE_EVENT',
  DELETE_ALL_EVENTS ='[Event] DELETE_ALL_EVENTS',
}

export class LoadAllEvents implements Action {
  readonly type = EventActionTypes.LOAD_ALL_EVENTS;
  constructor() {}
}
export class LoadAllEventsSuccess implements Action {
  readonly type = EventActionTypes.LOAD_ALL_EVENTS_SUCCESS;
  constructor(public payload: Event[]) {}
}

export class LoadDirectorsEvents implements Action {
  readonly type = EventActionTypes.LOAD_DIRECTORS_EVENTS;
  constructor(public directorId : number) {}
}

export class LoadDirectorsEventsSuccess implements Action {
  readonly type = EventActionTypes.LOAD_DIRECTORS_EVENTS_SUCCESS;
  constructor(public payload: Event[] ) {}
}

export class NewEvent implements Action {
  readonly type = EventActionTypes.NEW_EVENT;
  constructor(public payload: Event) {}
}

export class NewEventSuccess implements Action {
  readonly type = EventActionTypes.NEW_EVENT_SUCCESS;
  constructor(public payload: Event) {}
}

export class UpdateEvent implements Action {
  readonly type = EventActionTypes.UPDATE_EVENT;

  constructor(public payload: Event) {}
}

export class DeleteEvent implements Action {
  readonly type = EventActionTypes.DELETE_EVENT;
  constructor(public payload : Event) {}
}

export class DeleteAllEvents implements Action {
  readonly type = EventActionTypes.DELETE_ALL_EVENTS;
  constructor(){}
}



export type EventActions = LoadDirectorsEvents 
| LoadAllEvents
| LoadAllEventsSuccess
| LoadDirectorsEventsSuccess
| NewEvent 
| NewEventSuccess
| UpdateEvent 
| DeleteEvent
| DeleteAllEvents;
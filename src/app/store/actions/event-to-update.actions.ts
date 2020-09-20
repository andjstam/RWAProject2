import { Action } from '@ngrx/store';
import { Event } from '../../models/Event';

export enum EventToUpdateTypes {
  SET_EVENT_TO_UPDATE = '[Event] SET_EVENT_TO_UPDATE',
  DELETE_EVENT_TO_UPDATE ='[Event] DELETE_EVENT_TO_UPDATE'
}

export class EventToUpdate implements Action {
  readonly type = EventToUpdateTypes.SET_EVENT_TO_UPDATE;

  constructor(public payload: Event) {}
}

export class DeleteEventToUpdate implements Action {
  readonly type = EventToUpdateTypes.DELETE_EVENT_TO_UPDATE;
}

export type EventToUpdateActions = EventToUpdate | DeleteEventToUpdate;

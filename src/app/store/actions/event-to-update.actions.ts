import { Action } from '@ngrx/store';
import { Event } from '../../models/Event';

export enum EventToUpdateTypes {
  SET_EVENT_TO_UPDATE = '[Event] Set event to update',
  DELETE_EVENT_TO_UPDATE ='[Event] Delete event to update'
}

export class EventToUpdate implements Action {
  readonly type = EventToUpdateTypes.SET_EVENT_TO_UPDATE;

  constructor(public payload: Event) {}
}

export class DeleteEventToUpdate implements Action {
  readonly type = EventToUpdateTypes.DELETE_EVENT_TO_UPDATE;
}

export type EventToUpdateActions = EventToUpdate | DeleteEventToUpdate;

import { Action, createAction, props } from '@ngrx/store';
import { Director } from '../../models/director'

export enum DirectorActionTypes {
    NEED_INFO_ACTION = '[Director Profile Page] Requesting User Info',
    GET_INFO_ACTION ='[Director Profile Page] Getting User Info',
    DELETE_INFO_ACTION ='[Director Logged Out]'
}


export class NeedDirectorInfo implements Action {
    readonly type = DirectorActionTypes.NEED_INFO_ACTION;
    constructor(public email:string){}
}

export class GetDirectorInfo implements Action {
    readonly type = DirectorActionTypes.GET_INFO_ACTION;
    constructor(public director: Director){}
}

export class DeleteDirectorInfo implements Action {
    readonly type = DirectorActionTypes.DELETE_INFO_ACTION;
    constructor () {}
}


export type DirectorActions = NeedDirectorInfo | GetDirectorInfo | DeleteDirectorInfo;
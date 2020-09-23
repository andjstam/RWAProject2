export interface IEventSignedEmployed {
    id: number;
    event: number;
    user: number;
}

export class EventSignedEmplyed implements IEventSignedEmployed{
    id: number;
    event: number;
    user: number;

    constructor(idEvent: number, idUser: number){
        this.event=idEvent;
        this.user=idUser;
    }

}
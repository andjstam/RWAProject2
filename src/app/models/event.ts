
export interface IEvent {
    id: number;
    name: string;
    description: string;
    userType: string;
    userCount: number;
    directorId: string;
}

export class Event implements IEvent{
    id: number;
    name: string;
    description: string;
    userType: string;
    userCount: number;
    directorId: string;

    constructor(id, name, description, type, count, dirId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.userType = type;
        this.userCount = count;
        this.directorId = dirId;
      }
  
}
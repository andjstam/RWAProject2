export interface IUser {
    name:string;
    surname:string;
    email: string;
    type: string;
    grade: number;
    status: string;
    workPlace: string;

}

export class User implements IUser{
    name: string;
    surname: string;
    email: string;
    type: string;
    grade: number;
    status: string;
    workPlace: string

    constructor(name, surname,email, type, grade,status, workPlace) {
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.type=type;
        this.grade=grade;
        this.status=status;
        this.workPlace=workPlace;
    }
  
}
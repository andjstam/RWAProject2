import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { User } from 'src/app/models/User';
import { AppState } from 'src/app/store';
import { selectAllUsers } from '../../store/selectors/user.selectors'
import { filter } from 'rxjs/operators';
import { RemoveSpecificUser } from '../../store/actions/user.actions';

@Component({
  selector: 'app-pretraga-korisnici',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  usersArray: User[]=[];
  filteredUsers: User[]=[];
  showModal: boolean=false;
  specificUser: User = {
    id: undefined,
    name: '',
    surname: '',
    email: '',
    type: '',
    grade: null,
    status: '',
    workPlace: ''
  };
 
  _inputFilter: string;
  get inputFilter(){
    return this._inputFilter;
  }
  set inputFilter(value:string){
    this._inputFilter=value;
    this.filteredUsers= this.inputFilter ? this.filter(this.inputFilter) : this.usersArray;
  }

  users$=this.store.pipe(
    select(selectAllUsers),
    filter(val => val !== undefined)
  )
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.showModal=false;
    
    this.users$.subscribe( users => {
      users.forEach(u =>  {
        this.usersArray.push(u)
        this.filteredUsers.push(u);
      }
    )})
  }

  filter(filterBy: string): User[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.usersArray.filter( (user: User)=>
      user.name.toLocaleLowerCase().indexOf(filterBy)!==-1 || 
      user.surname.toLocaleLowerCase().indexOf(filterBy)!==-1 ||
      user.type.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  detailsClicked(user: User){
    this.showModal=true;
    this.specificUser=user;
  }

  cancelModal(){
    this.showModal=false;
  }

  removeUser(user: User){
    this.usersArray=[];
    this.filteredUsers=[];
    this.specificUser=user;
    this.store.dispatch(new RemoveSpecificUser(this.specificUser));
  }
}

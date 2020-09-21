import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/User';
import { AppState } from 'src/app/store';
import { selectAllUsers } from '../../store/selectors/user.selectors'
import { DirectorService} from '../../services/director.service'

@Component({
  selector: 'app-pretraga-korisnici',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  usersArray: User[]=[];
  filteredUsers: User[]=[];
 
  _inputFilter: string;
  get inputFilter(){
    return this._inputFilter;
  }
  set inputFilter(value:string){
    this._inputFilter=value;
    this.filteredUsers= this.inputFilter ? this.filtriraj(this.inputFilter) : this.usersArray;
  }
  constructor(private store: Store<AppState>, private reziserService: DirectorService) { }

  ngOnInit(): void {

    this.store.select(selectAllUsers).subscribe(
      (users) => users.forEach(u => { this.usersArray.push(u); })
    )
    this.filteredUsers=this.usersArray;
   
    // this.reziserService.getAllUsers()
    // .subscribe(
    //   (users : User[]) =>{
    //     users.forEach(user => {
    //       this.usersArray.push(user);
    //     },
    //     err => {
    //       console.log(err.message);
    //       alert(`Ne radi get`);
    //     });
    //   })
    //   //console.log(this.nizKorisnik)
    //   this.filteredUsers=this.usersArray;
    //   console.log('on init end');
    
  }

  filtriraj(filterBy: string): User[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.usersArray.filter( (user: User)=>
      user.name.toLocaleLowerCase().indexOf(filterBy)!==-1 || 
      user.surname.toLocaleLowerCase().indexOf(filterBy)!==-1 ||
      user.type.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

}

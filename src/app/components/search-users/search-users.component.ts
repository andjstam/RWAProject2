import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DirectorService} from '../../services/director.service'

@Component({
  selector: 'app-pretraga-korisnici',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  nizKorisnik: User[]=[];
  filteredNizKorisnik: User[]=[];
 
  _inputFilter: string;
  get inputFilter(){
    return this._inputFilter;
  }
  set inputFilter(value:string){
    this._inputFilter=value;
    this.filteredNizKorisnik= this.inputFilter ? this.filtriraj(this.inputFilter) : this.nizKorisnik;
  }
  constructor(private reziserService: DirectorService) { }

  ngOnInit(): void {
    
    this.reziserService.getAllUsers()
    .subscribe(
      users =>{
        users.forEach(user => {
          var newUser=new User(user.name, user.surname, user.email, user.type, user.grade, user.status, user.workPlace);
          this.nizKorisnik.push(newUser);
        },
        err => {
          console.log(err.message);
          alert(`Ne radi get`);
        });
      })
      //console.log(this.nizKorisnik)
      this.filteredNizKorisnik=this.nizKorisnik;
      console.log('on init end');
    
  }

  filtriraj(filterBy: string): User[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.nizKorisnik.filter( (user: User)=>
      user.name.toLocaleLowerCase().indexOf(filterBy)!==-1 || 
      user.surname.toLocaleLowerCase().indexOf(filterBy)!==-1 ||
      user.type.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

}

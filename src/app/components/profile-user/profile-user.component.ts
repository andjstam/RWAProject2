import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { User } from 'src/app/models/User';
import { AppState } from 'src/app/store';
import { selectUserInfo } from '../../store/selectors/user-info.selectors'

@Component({
  selector: 'app-profil-korisnik',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  user: User = {
    id: undefined,
    name: '',
    surname: '',
    email: '',
    type: '',
    grade: null,
    status: '',
    workPlace: ''
  };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectUserInfo)
    .subscribe((user: User) => this.user={...user} );
  }

}

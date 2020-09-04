import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegUser } from '../../models/reg-user';
import { Router } from '@angular/router';
import { ShowNavService } from '../../services/show-nav.service';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import {Login} from './auth.actions'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : FormControl= new FormControl('', [Validators.required, Validators.email]);
  password : FormControl= new FormControl('', [Validators.required]);
  errorMsg="";
  logedUser: RegUser;

  constructor(private authService:AuthService,
              private showNavService: ShowNavService,
              private router: Router,
              private store: Store<AppState> ) { }

  ngOnInit(): void {}

  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();
  
  cancelLogIn(): void {
    this.cancelClicked.emit();
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Morate uneti vrednost';
    }
    return this.email.hasError('email') ? 'Nevalidan email' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Morate uneti vrednost';
    }
  }

  btnLoginClicked(){
    const email: HTMLInputElement = (document.getElementById('email-input-log') as HTMLInputElement);
    const password: HTMLInputElement = (document.getElementById('password-input-log') as HTMLInputElement);
    const provera=this.checkInput(email.value, password.value);
    if(provera){
      this.authService.checkIfUserValid(email.value, password.value)
      .subscribe(value=>{
        console.log(value);
        if(value.length!=0){
          this.errorMsg="";
          this.logedUser= new RegUser (value[0].email, value[0].password, value[0].role);
          console.log(this.logedUser);
          //bitno!
          this.store.dispatch(new Login({user : value[0] }));
          this.router.navigate([`./${this.logedUser.role}`]);
          this.showNavService.changeFlag(true);
        }
        else{
          this.errorMsg="Pogrešan email ili password!"
        }
      })
    }
    else{
      this.errorMsg="Morate uneti sva input polja!";
    }
  }

  checkInput(email,password):boolean{
    if((password === '' || password == null || password === undefined ) || 
        (email === '' || email == null || email === undefined))
        return false;
    else return true;
  }
  
}

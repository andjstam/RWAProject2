import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegUser } from '../registration/reg-user';

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

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
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

  @Output() cancelClicked: EventEmitter<any> =
        new EventEmitter();

  cancelLogIn(): void {
      this.cancelClicked.emit();
  }

  btnLoginClicked(){
    const email: HTMLInputElement = (document.getElementById('email-input-log') as HTMLInputElement);
    const password: HTMLInputElement = (document.getElementById('password-input-log') as HTMLInputElement);
    const provera=this.checkInput(email.value, password.value);
    if(provera){
      this.authService.checkIfUserValid(email.value, password.value)
      .subscribe(value=>{
        if(value.length!=0){
          this.errorMsg="";
          this.logedUser= new RegUser(value[0].email, value[0].password, value[0].role);
          console.log(this.logedUser);
          //router.nagivate..
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

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import { JwtHelperService } from "@auth0/angular-jwt";
import { LoggedUser } from '../../models/LoggedUser';
import { Director } from '../../models/Director';
import { registerLocaleData } from '@angular/common';
import { User } from '../../models/User';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  selectedRadio:string;
  selectedSelect=" ";
  isDirector:boolean;
  isUser:boolean;
  errorMsg="";

  constructor(private authService: AuthService,
              private jwtHelper: JwtHelperService){
    this.isDirector=false;
    this.isUser=false;
   }

  ngOnInit(): void {
  }

  radioChange(event: MatRadioChange) {
    this.selectedRadio = event.value;
    if(this.selectedRadio=="reziser"){
      this.isDirector=true;
      this.isUser=false;
    }
    else{
      this.isDirector=false;
      this.isUser=true;
    }
    console.log(this.selectedRadio);
  }

  btnRegistrujClicked(){
    const ime: HTMLInputElement = (document.getElementById('input-ime') as HTMLInputElement);
    const prezime: HTMLInputElement = (document.getElementById('input-prezime') as HTMLInputElement);
    const email: HTMLInputElement = (document.getElementById('input-email') as HTMLInputElement);
    const password: HTMLInputElement = (document.getElementById('input-password') as HTMLInputElement);
    const sertifikat: HTMLInputElement = (document.getElementById('input-sertificate') as HTMLInputElement);
    
    if(this.selectedRadio=="reziser"){
      const provera=this.checkInput(ime.value, prezime.value, email.value,password.value, sertifikat.value);
      if(!provera){
        this.errorMsg="Unesite sva input polja za registraciju!"
      }
      else{
        this.registerUser(email.value, password.value, this.selectedRadio);
      
        let regReziser=new Director(ime.value,prezime.value, email.value,sertifikat.value);
        this.authService.postRegisterDirector(regReziser)
        .subscribe(value => {
          alert(`Uspešno registrovan reziser ${regReziser.email}!`)
          },
          err => {
          alert(`Dogodila se greška pri registrovanju rezisera, pokušajte ponovo.`)
        })
        ime.value='';
        prezime.value='';
        email.value='';
        password.value='';
        sertifikat.value='';
      }
    }
    else if(this.selectedRadio=="korisnik"){
      const tip=this.selectedSelect;
      const provera=this.checkInput(ime.value, prezime.value, email.value,password.value, tip);
      if(!provera){
        this.errorMsg="Unesite sva input polja za registraciju!"
      }
      else{
        this.registerUser(email.value, password.value, this.selectedRadio);
        let regKorisnik= new User(ime.value, prezime.value,email.value, tip,"","","");
        this.authService.postRegisterUser(regKorisnik)
        .subscribe(value => {
          alert(`Uspešno registrovan ${tip} ${regKorisnik.email}!`)
          },
          err => {
          alert(`Dogodila se greška pri registrovanju ${tip}, pokušajte ponovo.`)
        })
        ime.value='';
        prezime.value='';
        email.value='';
        password.value='';
      }
    }
    else this.errorMsg="Morate izabrati vrstu naloga-Režiser ili Korisnik!";
  }

  registerUser(email:string, password:string, role:string){
    let regkorisnik=new LoggedUser(email, password, role)
    this.authService.postRegisterLoggedUser(regkorisnik)
    .subscribe(value => {
      //console.log(`Uspešno registrovan user ${regkorisnik.email}!`)
      },
      err => {
      alert(`Dogodila se greška pri registrovanju rezisera, pokušajte ponovo.`)
    })
  }

  checkInput(ime, prezime,email,password,sertifikat):boolean{
    if((ime === '' || ime == null || ime === undefined)  ||
        (prezime === '' || prezime == null || prezime === undefined) || 
        (password === '' || password == null || password === undefined ) || 
        (email === '' || email == null || email === undefined) ||
        (sertifikat === '' || sertifikat ==  null || sertifikat=== undefined || sertifikat===" "))
        return false;
    else return true;
  }
}

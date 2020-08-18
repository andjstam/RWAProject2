import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';

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

  constructor(private authService: AuthService){
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
    console.log("Registuj se kliknuto!");
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
        console.log(ime.value, prezime.value, email.value,password.value, sertifikat.value);
        this.errorMsg="";
      }
    }
    else if(this.selectedRadio=="korisnik"){
      const tip=this.selectedSelect;
      const provera=this.checkInput(ime.value, prezime.value, email.value,password.value, tip);
      if(!provera){
        this.errorMsg="Unesite sva input polja za registraciju!"
      }
      else{
        console.log(ime.value, prezime.value, email.value,password.value, tip);
        this.errorMsg="";
      }
    }
    else this.errorMsg="Morate izabrati vrstu naloga(Režiser ili korisnik)!";

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

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  selected:string;
  isDirector:boolean;
  isUser:boolean;
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private authService: AuthService){
    this.isDirector=false;
    this.isUser=false;
   }

  ngOnInit(): void {
  }

  btnRegistrujClicked(){
    console.log("Registuj se kliknuto!");

    this.authService.getAllUsers()
    .subscribe( users => console.log(users));

    // this.authService.postRegisteredUser()
    // .subscribe(info => console.log(info));
    
    console.log(this.selected);
  }

  radioChange(event: MatRadioChange) {
    this.selected = event.value;
    if(this.selected=="reziser"){
      this.isDirector=true;
      this.isUser=false;
    }
    else{
      this.isDirector=false;
      this.isUser=true;
    }
    console.log(this.selected);
  }

}

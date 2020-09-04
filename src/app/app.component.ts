import { Component } from '@angular/core';
import {ShowNavService} from './show-nav.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Direktorg';
  showNavButtons: boolean;

  constructor(private showNavService: ShowNavService) {}

  ngOnInit(){
    this.showNavService.flagCurrent.subscribe(flag => this.showNavButtons=flag);
    console.log("VIde se dugmici: " + this.showNavButtons)
  }

}

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectLoggedUser } from '../login/auth.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-reziser',
  templateUrl: './reziser.component.html',
  styleUrls: ['./reziser.component.css']
})
export class ReziserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

}

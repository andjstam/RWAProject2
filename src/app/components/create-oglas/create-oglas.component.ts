import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'create-oglas',
  templateUrl: './create-oglas.component.html',
  styleUrls: ['./create-oglas.component.css']
})
export class CreateOglasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();
  
  cancelModal(): void {
    this.cancelClicked.emit();
  }
 
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'create-oglas',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();
  
  cancelModal(): void {
    this.cancelClicked.emit();
  }
 
}

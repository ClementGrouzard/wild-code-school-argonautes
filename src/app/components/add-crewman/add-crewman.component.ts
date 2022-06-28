import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Crewman } from '../../Crewman';

@Component({
  selector: 'app-add-crewman',
  templateUrl: './add-crewman.component.html',
  styleUrls: ['./add-crewman.component.css']
})
export class AddCrewmanComponent implements OnInit {
  @Output() onAddCrewman: EventEmitter<Crewman> = new EventEmitter();
  name: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.name) {
      alert('Veuillez renseigner le nom de l\'Argonaute qui rejoindra l\'équipage !');
      return;
    }
      
    const newCrewman = {
      name: this.name,
    }

    this.onAddCrewman.emit(newCrewman)

    this.name='';

  }

}

import { Component, OnInit } from '@angular/core';

import { CrewService } from '../../services/crew.service';
import { Crewman } from '../../Crewman';


@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})

export class CrewComponent implements OnInit {

  crewmen: Crewman[] = [];

  constructor(private crewService: CrewService) { }

  ngOnInit(): void {
    this.crewService.getCrewmen().subscribe((crewmen) => this.crewmen = crewmen);
  }

  addCrewman(crewman: Crewman) {
    this.crewService.addCrewman(crewman).subscribe((crewman) => this.crewmen.push(crewman));
  }

}

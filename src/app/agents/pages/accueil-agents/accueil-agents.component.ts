import { Component, OnInit } from '@angular/core';
import { AgentsService } from 'src/app/utils/services/agents.service';
import { StoreService } from 'src/app/utils/services/store.service';

@Component({
  selector: 'app-accueil-agents',
  templateUrl: './accueil-agents.component.html',
  styleUrls: ['./accueil-agents.component.scss']
})
export class AccueilAgentsComponent implements OnInit {

  constructor(public store: StoreService, public agents: AgentsService) { }

  ngOnInit(): void {
    this.agents.connectDBRT()
  }

}

import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/utils/services/store.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  /** On créé un pointeur vers le service stockant et appleant les données */

  constructor(public store: StoreService) { }

  ngOnInit(): void {
    // this.store.getFirePages(); // Appel des données des pages
  }


}

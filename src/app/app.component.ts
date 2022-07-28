import { Component } from '@angular/core';
import { AuthService } from './utils/services/auth.service';
import { StoreService } from './utils/services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OvniOrNotOvni';
  //chargement des pages
  constructor(public store: StoreService, public auth: AuthService) { }
}

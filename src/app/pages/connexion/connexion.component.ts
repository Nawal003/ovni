import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/utils/models/user-i';
import { AuthService } from 'src/app/utils/services/auth.service';
import { StoreService } from 'src/app/utils/services/store.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  user: UserI = <UserI>{};

  constructor(public store: StoreService, public auth: AuthService) { }

  ngOnInit(): void {
  }


  log() {
    console.log(this.user)
  }

}

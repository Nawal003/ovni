import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/utils/models/user-i';
import { AuthService } from 'src/app/utils/services/auth.service';
import { StoreService } from 'src/app/utils/services/store.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  user: UserI = <UserI>{};
  constructor(public auth: AuthService, public store: StoreService) { }

  ngOnInit(): void {
  }

}

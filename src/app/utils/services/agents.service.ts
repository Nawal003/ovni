import { Injectable } from '@angular/core';
import { Database, objectVal, ref, set } from "@angular/fire/database";
import { UserI } from '../models/user-i';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
  questionnaires: Array<any> = [];

  constructor(private dbrt: Database) { }
  /**Connexion aux données temps réel */

  connectDBRT() {
    this.questionnaires = []
    objectVal<any>(ref(this.dbrt, 'reponses')).subscribe(rep => {
      for (let r in rep) {
        console.log(rep)
        rep[r].uid = r
        this.questionnaires.push(rep[r])
      }
    })
  }
  /**Envoie de données dans la base temps réel */
  sendRT(u: UserI) {
    // set(ref(this.dbrt, 'reponses'), { [u.uid!]: { score: u.score } })
    set(ref(this.dbrt, "reponses/" + u.uid), { score: u.score, displayName: u.displayName })
  }
}

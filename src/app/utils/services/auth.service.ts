import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";
import { doc } from '@angular/fire/firestore';
import { stringify } from 'querystring';
import { User, UserI } from '../models/user-i';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private store: StoreService) { }
  // user: UserI = new User()
  user: UserI = <UserI>{}



  creeFireCompte() {
    createUserWithEmailAndPassword(this.auth, this.user.email, this.user.pass)
      .then(u => {
        console.log(u)
        this.user.uid = u.user.uid
        this.user.pass = "";
        this.store.setFireUser(this.user)
      })

      .catch(err => {
        console.log(err.code, err.message);

      })
  }
  idFireUser() {
    signInWithEmailAndPassword(this.auth, this.user.email, this.user.pass)
      .then(retour => {
        this.user.uid = retour.user.uid
        this.store.getInfosUser(this.user)


      })

      .catch(err => {
        console.log(err.code, err.message);

      })
  }
  signOut() {
    signOut(this.auth)
      .then(out => {
        alert("vous être déconnecté!")
        this.user = <UserI>{};
      })
      .catch(err => { console.log(err) })
  }
  setUser() {
    this.user = { email: '', pass: '', statut: 0, score: 0 }
  }



}

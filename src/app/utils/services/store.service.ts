import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Firestore, getDocs, getDoc, collection, doc, setDoc } from '@angular/fire/firestore';

import { QuestionI } from '../models/question-i';
import { UserI } from '../models/user-i';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  pages: any = {};
  // user: UserI = <UserI>{}

  constructor(private fire: Firestore) {
    this.getFirePages()

  }
  getFirePages() {
    getDocs(collection(this.fire, 'pages'))
      .then(documents => {
        documents.forEach(page => this.pages[page.id] = page.data())
        console.log(this.pages)
      })

      .catch(error => console.log(error));
  }
  //écrire les questions dans la base de données
  setFireQuestions(id: string, question: QuestionI) {
    const questionsDoc = doc(this.fire, 'questions', id);
    setDoc(questionsDoc, question, { merge: true });
  }
  setFireUser(u: UserI) {
    const userDoc = doc(this.fire, 'users', u.uid!);
    setDoc(userDoc, u, { merge: true });

  }
  setFireUserScore(u: UserI) {
    const userDoc = doc(this.fire, 'users', u.uid!);
    setDoc(userDoc, { score: u.score }, { merge: true });
  }
  async getInfosUser(user: UserI) {
    return await getDoc(doc(this.fire, 'users', user.uid!))
      .then(u => {
        const userDatas = u.data();
        user.score = userDatas?.['score'];
        user.displayName = userDatas?.['displayName'];
        console.log(user);

      })
      .catch(err => {
        console.log(err);

      })
  }
}

import { Injectable } from '@angular/core';
import { Firestore, getDocs, getDoc, collection, doc } from '@angular/fire/firestore';

import { QuestionI } from '../models/question-i';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Array<QuestionI> = <Array<QuestionI>>[]



  constructor(private fire: Firestore) {

    this.getFireQuestions()
  }
  getFireQuestions() {
    getDocs(collection(this.fire, 'questions'))
      .then(documents => {
        documents.forEach(q => this.questions.push(q.data() as QuestionI))
        console.log(this.questions)

      })

      .catch(error => console.log(error));
  }

}

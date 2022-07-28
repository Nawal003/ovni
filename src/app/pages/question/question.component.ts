import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionI } from 'src/app/utils/models/question-i';
import { AgentsService } from 'src/app/utils/services/agents.service';
import { AuthService } from 'src/app/utils/services/auth.service';
import { QuestionsService } from 'src/app/utils/services/questions.service';
import { StoreService } from 'src/app/utils/services/store.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  index: number = 0;
  question: QuestionI = <QuestionI>{};
  rep: number = 0


  constructor(private agents: AgentsService, public store: StoreService, public q: QuestionsService, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this.q.getFireQuestions();
    this.question = this.q.questions[this.index];
    this.auth.user.score = 0
  }
  changeQuestion() {

    if (this.index < this.q.questions.length) ++this.index;
    this.question = this.q.questions[this.index]
    this.setScore()
  }
  /**calculer le score */
  setScore() {
    this.auth.user.score += this.rep
    console.log(this.auth.user.score)
    this.store.setFireUser(this.auth.user)
    this.agents.sendRT(this.auth.user)
  }

}

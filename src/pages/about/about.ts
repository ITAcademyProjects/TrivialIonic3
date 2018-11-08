import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuizProvider } from '../../providers/quiz/quiz';
import { Question } from '../../models/question';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  questions:Question[];
  questionIndex:number=0;

  constructor(public navCtrl: NavController, public quiz:QuizProvider) {
    this.getAllQuestions();
  }

  getCurrentQuestion(){
    return this.questions[this.questionIndex];
  }
  
  getAllQuestions(){
    this.quiz.getAllQuestions()
    .then(res => this.questions=res)
    .catch(err => console.log(err));
  }
}

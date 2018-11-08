import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../../models/question';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizProvider {

  constructor(public http: HttpClient) {
  }
  
  public getAllQuestions(): Promise<Question[]> {
    return this.http.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple')
    .map((res:any) =>{
      return res.results;
    })  
    .toPromise();
  }

}

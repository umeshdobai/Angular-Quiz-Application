import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Quiz } from "src/app/quiz/quiz";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizurl='./data/quiz.json';
  constructor(private http:HttpClient) { }
  getQuiz():Observable<Quiz[]>{
    return this.http.get<Quiz[]>(this.quizurl).pipe(
      tap(data=>console.log('Quiz'+JSON.stringify(data))),
    )
  }
}

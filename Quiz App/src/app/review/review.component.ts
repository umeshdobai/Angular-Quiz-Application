import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/data.service";
import { QuizService } from "src/app/services/quiz.service";
import { Quiz } from "src/app/quiz/quiz";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  data: any[];
  quiz:Quiz[]
  constructor(private service:DataService,private quizservice:QuizService) { }

  ngOnInit() {
   
    this.service.share2$.subscribe(message=>{this.data=message;
      
    })
    this.quizservice.getQuiz().subscribe(
      data=>{
        this.quiz=data;    
      }      
    )
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from "src/app/services/quiz.service";
import { Quiz } from "src/app/quiz/quiz";
import { DataService } from "src/app/data.service";
import { NgForm } from "@angular/forms/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers:[QuizService]
})
export class QuizComponent implements OnInit {


  data: string
  constructor(private quizservice:QuizService,private service:DataService,router:Router){}
  quiz:Quiz[]=[];
  msg:any[];
  mode='quiz';
  result:any[]
  count:number=0;  
   timer: any = null;
  ellapsedTime = '00:00';
  duration = '05:00';
  ngOnInit(): void {
    this.service.share$.subscribe(message=>{
      this.data=message;

    })
    
    this.quizservice.getQuiz().subscribe(
      data=>{
        this.quiz=data;
        this.msg=data;      
      }      
    )
  }  
  save(form:NgForm){
    
      const mapped = Object.keys(form.value).map(key => ({type: key, value: form.value[key]}));
      console.log(mapped);
      this.service.sendReview(mapped);
      for(let i in mapped)
      {
        if(mapped[i].value===this.msg[i].answer){
          this.count++;
        }
      }
      if(confirm("Before submit please check all the answers"+JSON.stringify(form.value))){
            this.service.sendResult(this.count);
      }     
      console.log(this.count);
      console.log(mapped[0].value);
      console.log(this.msg[0].answer);             
  }
  
}

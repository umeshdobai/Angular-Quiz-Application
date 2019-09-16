import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private content=new BehaviorSubject('');
  private result=new BehaviorSubject('');
  private review=new BehaviorSubject([]);
  share$=this.content.asObservable();
  share1$=this.result.asObservable();
  share2$=this.review.asObservable();
  constructor() { }

  sendMessage(message:string){
    this.content.next(message);
  }
  sendResult(result){
    this.result.next(result);
  }
  sendReview(review){
    this.review.next(review);
  }
}

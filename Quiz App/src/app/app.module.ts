import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { ResultComponent } from './result/result.component';
import { RuleComponent } from './rule/rule.component';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    NavbarComponent,
    ResultComponent,
    RuleComponent,
    LoginComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

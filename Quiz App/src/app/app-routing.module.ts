import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from "src/app/quiz/quiz.component";
import { ResultComponent } from "src/app/result/result.component";
import { NavbarComponent } from "src/app/navbar/navbar.component";
import { RuleComponent } from "src/app/rule/rule.component";
import { LoginComponent } from "src/app/login/login.component";
import { ReviewComponent } from "src/app/review/review.component";


const routes: Routes = [
   {path:'quiz',component:QuizComponent},
   {path:'result',component:ResultComponent},
   {path:'navbar',component:NavbarComponent},
   {path:'rule',component:RuleComponent},
   {path:'review',component:ReviewComponent},
    {path:'login',component:LoginComponent},
   {path:'',redirectTo:'/rule',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

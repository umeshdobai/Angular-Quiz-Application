import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import { Login } from "src/app/login/login";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:DataService) { }
  login=new Login;
  ngOnInit() {
  }
   data:any
  save(userForm:NgForm){
    this.data=userForm.form.get('username')
           
  }
  
  onSubmit(){
   this.service.sendMessage(this.login.username); 
   this.router.navigate(['quiz']);
   console.log(this.login.username);
   console.log(this.login.password); 
  }
}

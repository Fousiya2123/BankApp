import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//life cycle//3rd executed

  //class is a collection of properties and methods
  constructor() { }//1st executes

                  //constructor-used for object initialization.
                 //it automatically invokes when an object is created.

  ngOnInit(): void {//2nd executed
                   //initial process of a component
                  //when a component created , same time it is initialized or authorized
                  //when a component is created, there is a life cycle for it.
  }

//properties

aim="your perfect banking partner"

account="please enter your account number"

// acno:any;
acno="";//hold values from the user
pswd="";

userDetails:any={
  1000:{acno:1000,username:"karan",password:1000,balance:2000},
  1001:{acno:1001,username:"charan",password:1001,balance:2000},
  1002:{acno:1002,username:"preetha",password:1002,balance:2000},

}
//user defined functions
//4th executed

login(){
//  alert('login clicked') 
var acno=this.acno;
var pswd=this.pswd;
var userDetails=this.userDetails;

if(acno in userDetails){
  if(pswd==userDetails[acno].password){
    alert('Login successfully');
  }
  else{
    alert('incorrect password');
  }

}
else{
     alert('user not found');
}
}
acnoChange(event:any){
  // console.log(event.target.value);
  this.acno = event.target.value;
  console.log(this.acno);
  
  
}
pswdChange(event:any){
  // console.log(event.target.value);
  this.pswd=event.target.value;
  console.log(this.pswd);
  
  
}
}

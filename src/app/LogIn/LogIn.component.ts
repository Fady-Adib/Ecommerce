import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Core/service/Auth.service';

@Component({
  selector: 'app-LogIn',
  templateUrl: './LogIn.component.html',
  styleUrls: ['./LogIn.component.css']
})
export class LogInComponent implements OnInit {

  errorMessage: string=""
LogInForm:FormGroup=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^(((?=\S*?[A-Z])|(?=\S*?[a-z])|(?=\S*?[0-9])).{5,})\S$/gm)]),


}

)


  constructor(private _authService:AuthService,private _router:Router ) {

  }

  logInRes(form:FormGroup) {


if (form.valid) {

this._authService.LoginApi(form.value).subscribe({
  next:(res)=>{

localStorage.setItem('userToken',res.token);
this._authService.getUserData();
console.log(this._authService.userData);
this._router.navigate(['/Home'])




  },
  error:(err)=> {this.errorMessage=err.error.message
console.log(err.error

);

  },
})






}


  }




  ngOnInit() {
  }


}

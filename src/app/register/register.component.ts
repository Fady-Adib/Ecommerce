

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
import { AuthService } from '../Core/service/Auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  errorMessage: string=""
registerForm:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^(((?=\S*?[A-Z])|(?=\S*?[a-z])|(?=\S*?[0-9])).{5,})\S$/gm)]),
  rePassword:new FormControl('',[Validators.required,]),
  phone:new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(13)])
}

)
showlog(){console.log(this.registerForm.get('name'))


};

  constructor(private _authService:AuthService,private _router:Router ) {

  }

  RegisterRes(form:FormGroup) {
if (form.valid) {

this._authService.RegisterApi(form.value).subscribe({
  next:(res)=>{
    console.log(res)
    this._router.navigate(["/LogIn"])



  },
  error:(err)=> {this.errorMessage=err.error.message
console.log(err.error
);

  },
})






}


  }



confirmPassword(){


if (this.registerForm.get('password')?.value===this.registerForm.get('rePassword')?.value) {
  this.registerForm.get('rePassword')?.setErrors(null)

} else {
this.registerForm.get('rePassword')?.setErrors({"misMatch":true})
}
  console.log(
  this.registerForm.get('rePassword')?.getError('misMatch')
)
  }

}

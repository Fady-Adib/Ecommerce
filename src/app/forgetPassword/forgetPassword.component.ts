import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../Core/service/Auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgetPassword',
  templateUrl: './forgetPassword.component.html',
  styleUrls: ['./forgetPassword.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  ForgetForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit() {}
  GetCode(data: FormGroup) {
    this._AuthService.forgetPasswordApi(data.value).subscribe({
      next: (res) => {
        console.log(res);
        data.reset('');
        this._Router.navigate(['Forgetpassword/RestPassword']);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Core/service/Auth.service';

@Component({
  selector: 'app-GetNewPassword',
  templateUrl: './GetNewPassword.component.html',
  styleUrls: ['./GetNewPassword.component.css'],
})
export class GetNewPasswordComponent implements OnInit {
  NewPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(((?=\S*?[A-Z])|(?=\S*?[a-z])|(?=\S*?[0-9])).{5,})\S$/gm
      ),
    ]),
  });
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit() {}
  setNewPassword(data: FormGroup) {
    console.log(data.value);

    this._AuthService.setNewPasswordApi(data.value).subscribe({
      next: (res) => {
        console.log(res);
        data.reset('');
        localStorage.setItem('userToken', res.token);
        this._AuthService.getUserData();
        console.log(this._AuthService.userData);
        this._Router.navigate(['/Home']);
      },
    });
  }
}


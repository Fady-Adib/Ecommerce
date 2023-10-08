import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Core/service/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Restpassword',
  templateUrl: './Restpassword.component.html',
  styleUrls: ['./Restpassword.component.css'],
})
export class RestpasswordComponent implements OnInit {
  restCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required]),
  });
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit() {}
  sendCode(data: FormGroup) {
    this._AuthService.SendodeApi(data.value).subscribe({
      next: (res) => {
        console.log(res);
        data.reset('');
        this._Router.navigate(['RestPassword/newPassword']);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../Core/service/Cart.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-CreateNewAddress',
  templateUrl: './CreateNewAddress.component.html',
  styleUrls: ['./CreateNewAddress.component.css'],
})
export class CreateNewAddressComponent implements OnInit {
  userAddressForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
  });
  constructor(
    private _CartService: CartService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {}
  onSubmit(userAddressForm: FormGroup) {
    console.log(userAddressForm.value);
    this._CartService.addUserAddressApi(userAddressForm.value).subscribe({
      next: (res) => {
        console.log(res);

       this._Router.navigate(["../"],{relativeTo:this._ActivatedRoute})
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

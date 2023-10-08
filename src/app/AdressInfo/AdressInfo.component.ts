import { ShippingAddress } from './../Core/InterFace/Product';
import { Component, OnInit } from '@angular/core';
import { Address } from '../Core/InterFace/Product';
import { FormGroup, FormControl } from '@angular/forms';
import { CartService } from '../Core/service/Cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-AdressInfo',
  templateUrl: './AdressInfo.component.html',
  styleUrls: ['./AdressInfo.component.css'],
})
export class AdressInfoComponent implements OnInit {
  userAddress: Address[] = [];

  constructor(
    private _CartService: CartService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit() {
    this.getAddress();
  }
  getAddress() {
    this._CartService.getUserAddressApi().subscribe({
      next: (res) => {
        this.userAddress = res.data;
        console.log(this.userAddress);
      },
      error: (err) => {
        err;
      },
    });
  }
  removeAddress(id?: string) {
    this._CartService.removeAddressApi(id).subscribe({
      next: (res) => {
        console.log(res);
        this.userAddress = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  continuePayment(Address: Address) {
    let cartId: string | null = '';
    let paymentType: string | null = '';
    let shippingAddress: ShippingAddress = Address;
    console.log(shippingAddress);
    this._ActivatedRoute.paramMap.subscribe({
      next: (prams) => {
        prams.get('cartId');
        cartId = prams.get('cartId');
        console.log(cartId);
      },
    });
    this._ActivatedRoute.paramMap.subscribe({
      next: (prams) => {
        prams.get('paymentType');
        paymentType = prams.get('paymentType');
        console.log(paymentType);
        if (paymentType == 'cash') {
          this.cashPayment(cartId, shippingAddress);
        } else {
          if (paymentType == 'online') {
            this.onlinePayment(cartId, shippingAddress);
          } else {
          }
        }
      },
    });
  }

  cashPayment(cartId: any, shippingAddress: ShippingAddress) {
    this._CartService.createCashOrderApi(cartId, shippingAddress).subscribe({
      next: (res) => {
        console.log(res);
        this._Router.navigate(['/allorders']);

      },
    });
  }
  onlinePayment(cartId: any, shippingAddress: ShippingAddress) {
    this._CartService.checkoutSession(cartId, shippingAddress).subscribe({
      next: (res) => {
        console.log(res);
        window.location.href=res.session.url;

      },
    });
  }
}

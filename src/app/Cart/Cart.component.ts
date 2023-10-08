import { Component, OnInit } from '@angular/core';
import { CartService } from '../Core/service/Cart.service';
import { CartProducts } from '../Core/InterFace/Product';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css'],
})
export class CartComponent implements OnInit {
  dataApi: {} = {};
  inCartProduct: CartProducts[] = [];

  totalCartPrice: number = 0;
  numOfCartItems: number = 0;
  totalPieces: number = 0;
  cartId: string = '';
  isThereCart: boolean = false;
  constructor(private _CartService: CartService) {}

  ngOnInit() {
    this._CartService.getCard().subscribe({
      next: (res) => {
        console.log(res);
        this.dataApi = res;
        this.cartPage(this.dataApi);
        this.cartId = res.data._id;
        console.log(this.cartId);
        this.isThereCart = true;
      },

      error: (err) => {
         this.isThereCart = false;
      },
    });
  }
  removeItem(removedId: string) {
    this._CartService.removeItemApi(removedId).subscribe({
      next: (res) => {
        this.dataApi = res;
        this.cartPage(this.dataApi);
      },
    });
  }
  cartPage(res: any) {
    this.inCartProduct = res.data.products;
    this.totalCartPrice = res.data.totalCartPrice;
    this.numOfCartItems = res.numOfCartItems;
    this.totalPieces = 0;
    for (let i = 0; i < this.inCartProduct.length; i++) {
      this.totalPieces = this.totalPieces + this.inCartProduct[i].count;
    }
  }
  updateItem(id: string, count: number) {
    if (count > 0) {
      this._CartService.UpdateCartApi(id, `${count}`).subscribe({
        next: (res) => {
          console.log(res);
          this.cartPage(res);
        },
      });
    } else {
      this.removeItem(id);
    }
  }
  CLearCart() {
    this._CartService.clearCartApi().subscribe({
      next: (res) => {
        console.log(res);
        this.ngOnInit();
      },
    });
  }
}

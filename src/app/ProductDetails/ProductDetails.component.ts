import { CartService } from './../Core/service/Cart.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../Home/Home.component';
import { Product } from '../Core/InterFace/Product';
import { ProductsService } from '../Core/service/Products.service';
import { BehaviorSubject } from 'rxjs';
import { Element } from '@angular/compiler';


@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product = {} as Product;
  Wishlist: Product[] = [];
  wishListIds: string[] = [];

  cardId: string = '';
  AddId: string = '';
  InWishList: boolean = false;
  constructor(
    private _CartService: CartService,
    private _ProductsService: ProductsService
  ) {}

  ngOnInit() {
    this._ProductsService.getWishListApi().subscribe({
      next: (res) => {
        this._ProductsService.Wishlist.next(res.data);
        this._ProductsService.Wishlist.subscribe({
          next: (ww) => {
            this.wishListIds = this._ProductsService.wishListIds;
          },
        });
      },
    });
  }

  addToCart(id: string, type: string): void {
    this.AddId = id;
    this._CartService.addToCart(this.AddId, type).subscribe({
      next: (res) => {
        console.log(res);
        if (type == 'wishlist') {
          this.wishListIds = res.data;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addToWishList(id: string) {
    if (this.wishListIds.includes(id)) {
      this.removeFromWishList(id);
    } else {
      this.addToCart(id, 'wishlist');
    }
  }
  removeFromWishList(id: string) {
    this._ProductsService.removeFromWishListApi(id).subscribe({
      next:
      (data) => {
        this._ProductsService.getWishListApi().subscribe(
          {
            next: (res) =>
            {
              this._ProductsService.Wishlist.next(res.data);
              this._ProductsService.Wishlist.subscribe({
                next: (Wishlist) => {
                  this._ProductsService.wishListIds=data.data
                  this.wishListIds = this._ProductsService.wishListIds;
                  console.log(this.wishListIds);
                },
              });
          },
        });
      },
    });
  }
}

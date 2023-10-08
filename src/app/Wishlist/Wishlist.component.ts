import { Product } from './../Core/InterFace/Product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Core/service/Products.service';

import { CartService } from '../Core/service/Cart.service';

@Component({
  selector: 'app-Wishlist',
  templateUrl: './Wishlist.component.html',
  styleUrls: ['./Wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  Wishlist: Product[] = [];
  wishListIds: string[] = [];
  isThereCart: boolean = false;
  constructor(
    private _ProductsService: ProductsService,
    private _CartService: CartService
  ) {}

  ngOnInit() {
    this._ProductsService.getWishListApi().subscribe({
      next: (res) => {
        this._ProductsService.Wishlist.next(res.data);

        this._ProductsService.Wishlist.subscribe({
          next: (ww) => {
            this.Wishlist = this._ProductsService.Wishlist.value;
            console.log(ww);
            this.isThereCart = true;
              if (this.Wishlist.length == 0) {
                this.isThereCart = false;
                console.log(this.isThereCart);
              }

            for (let i = 0; i < ww.length; i++) {
              this._ProductsService.wishListIds.push(ww[i].id);
              let filteredWishListIds = new Set(
                this._ProductsService.wishListIds
              );
              this._ProductsService.wishListIds =
                Array.from(filteredWishListIds);
              console.log(this._ProductsService.wishListIds);
              this.wishListIds = this._ProductsService.wishListIds;

            }
          },
        });
      },error:()=>{
        this.isThereCart = false;
      }
    });

  }
  addToCart(id: string, type: string): void {
    this._CartService.addToCart(id, type).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removeFromWishList(id: string) {
    this._ProductsService.removeFromWishListApi(id).subscribe({
      next: (data) => {
        this._ProductsService.getWishListApi().subscribe({
          next: (res) => {
            this._ProductsService.Wishlist.next(res.data);
            this._ProductsService.Wishlist.subscribe({
              next: (Wishlist) => {
                 this.Wishlist = this._ProductsService.Wishlist.value;
                this._ProductsService.wishListIds = data.data;
                this.wishListIds = this._ProductsService.wishListIds;
                console.log(this.wishListIds);
              if (this.Wishlist==null) {
                   this.isThereCart = false;
              }
              },
            });
          },
        });
      },
    });
  }
}

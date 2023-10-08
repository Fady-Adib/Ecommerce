import { Product } from './../Core/InterFace/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../Core/service/Products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../Core/service/Cart.service';


@Component({
  selector: 'app-ProductDetailsPage',
  templateUrl: './ProductDetailsPage.component.html',
  styleUrls: ['./ProductDetailsPage.component.css'],
})
export class ProductDetailsPageComponent implements OnInit {
  cardId: string | null = '';
  productItem: Product = {} as Product;

  AddId: string = '';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      }
    },
    nav: true,
  };
  constructor(private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService ,private _CartService:CartService
  ) {
    _ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        console.log(params);

        // Use a default value if 'id' is null, or handle it based on your requirements
        this.cardId = params.get('id')

        if (this.cardId !== null) {
          // Call the productDetailsApi method when 'id' is not null
          this._ProductsService.productDetailsApi(this.cardId).subscribe({
            next: (apiResponse) => {
              console.log(apiResponse);
              this.productItem = apiResponse.data;
              console.log(this.productItem);
            },
            error: (error) => {
              console.error(error);
              // Handle any errors that occur during the API call
            },
          });
        } else {
          // Handle the case where 'id' is null
          // You can add specific logic here, e.g., display an error message
        }
      },
    });
  }

  ngOnInit() {}
  addToCart(id: string,type:string) {
   this.AddId = id;
    console.log('addToCart', this.AddId);
    this._CartService.addToCart(this.AddId, type).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
}
  addToWishList(id: string) {
       this.AddId = id;
 this.addToCart(this.AddId, 'wishlist');
  }
}

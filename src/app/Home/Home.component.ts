
import { Category,Product } from './../Core/InterFace/Product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Core/service/Products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormGroup } from '@angular/forms';




@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  Wishlist:Product[]=[]
  searchKey: string = '';
  allProducts: Product[] = [];
  categories: Category[] = [];
  CategoriesSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 7,
      },
    },
    nav: true,
  };
  discountSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  constructor(private _ProductsService: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
     this._ProductsService.getWishListApi().subscribe({
       next: (res) => {
         this._ProductsService.Wishlist.next(res.data);
         this._ProductsService.Wishlist.subscribe({
           next: (ww) => {
            for (let i = 0; i < ww.length; i++) {
              this._ProductsService.wishListIds.push(ww[i].id);
              let filteredWishListIds = new Set(this._ProductsService.wishListIds);
               this._ProductsService.wishListIds =
                 Array.from(filteredWishListIds)
                 console.log(this._ProductsService.wishListIds);
            }
           },
         });
       },
     });




  }
  getProducts() {
    this._ProductsService.productApi('', '').subscribe({
      next: (res) => {
        this.allProducts = res.data;
      },
      error: () => {},
    });
  }
  getCategories() {
    this._ProductsService.categoriesApi().subscribe({
      next: (res) => {
        this.categories = res.data;

      },
      error: () => {},
    });
  }
}

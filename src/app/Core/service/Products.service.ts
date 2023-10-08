import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  Wishlist: BehaviorSubject<any> = new BehaviorSubject([]);
  wishListIds: string[] = [];
  headers: {} = {
    token: localStorage.getItem('userToken'),
  };
  constructor(private _HttpClient: HttpClient) {}

  productApi(type: string, id: string): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/products?${type + id}`
    );
  }
  productDetailsApi(Id: string): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/products/${Id}`
    );
  }
  categoriesApi(): Observable<any> {
    return this._HttpClient.get(
      'https://ecommerce.routemisr.com/api/v1/categories'
    );
  }
  brandsApi(): Observable<any> {
    return this._HttpClient.get(
      'https://ecommerce.routemisr.com/api/v1/brands'
    );
  }
  getWishListApi(): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        headers: this.headers,
      }
    );
  }
  removeFromWishListApi(id:string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
      {
        headers: this.headers,
      }
    );
  }
}

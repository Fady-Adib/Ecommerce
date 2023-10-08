
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address, ShippingAddress } from '../InterFace/Product';
import { AdressInfoComponent } from 'src/app/AdressInfo/AdressInfo.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  headers: {} = {
    token: localStorage.getItem('userToken'),
  };
  UserAdress: Address[] = [];
 
  constructor(private _HttpClient: HttpClient) {}

  addToCart(id: string, type: string): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/${type}`,
      {
        productId: id,
      },
      {
        headers: this.headers,
      }
    );
  }
  getCard(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: this.headers,
    });
  }
  removeItemApi(id: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers: this.headers,
      }
    );
  }
  UpdateCartApi(id: string, count: string): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: count,
      },
      {
        headers: this.headers,
      }
    );
  }
  createCashOrderApi(
    cartId: string,
    shippingAddress: ShippingAddress
  ): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
      shippingAddress,
      {
        headers: this.headers,
      }
    );
  }
  checkoutSession(
    cartId: string,
    shippingAddress: ShippingAddress
  ): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      shippingAddress,
      {
        headers: this.headers,
      }
    );
  }
  addUserAddressApi(address: Address): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/addresses`,
      address,
      {
        headers: this.headers,
      }
    );
  }
  getUserAddressApi(): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/addresses`,

      {
        headers: this.headers,
      }
    );
  }
  removeAddressApi(id?: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/addresses/${id}`,
      {
        headers: this.headers,
      }
    );
  }
  getYourOrders(): Observable<any> {
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/orders/`,
      {
        headers: this.headers,
      }
    );
  }
  clearCartApi(): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers: this.headers,
      }
    );
  }
}

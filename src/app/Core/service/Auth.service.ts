import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData:BehaviorSubject<any>=new BehaviorSubject('')
constructor(private _HttpClient:HttpClient) {
  if (localStorage.getItem('userToken')) {
 this.getUserData()
  }
 }

 getUserData(){

let codedToken=JSON.stringify(localStorage.getItem('userToken'))
console.log(codedToken);


 let encodedToken=jwtDecode(codedToken);
  this.userData.next(encodedToken);
  console.log(this.userData);



}
 LoginApi(data:any):Observable<any>{
   return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",data);
 }

 RegisterApi(data:any):Observable<any>{

  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",data)
 }

}

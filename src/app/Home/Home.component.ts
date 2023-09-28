import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Core/service/Products.service';
import { Product } from '../Core/InterFace/Product';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
allProducts:Product[]=[]
cardId:string=""
cartAddId:string=""
wishAddId:string=""
  constructor(private _ProductsService:ProductsService) { }
  ngOnInit(): void {
    this.getProducts()

  }

  getProducts(){
this._ProductsService.productApi().subscribe({
  next:(res)=>{
    this.allProducts=res.data
console.log(this.allProducts);


  },
  error:()=>{}

})





}
addToCart(id:string){
  this.cartAddId=id
console.log('addToCart',this.cartAddId);
}
addToWishList(id:string){
  this.wishAddId=id
console.log('addToCart',this.wishAddId);
}

}

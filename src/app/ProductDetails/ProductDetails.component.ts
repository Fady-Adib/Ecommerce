import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../Home/Home.component';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
cardId:string=""
  constructor(private _HomeComponent:HomeComponent) {
   this.cardId= _HomeComponent.cardId
   }

  ngOnInit() {
  }

}

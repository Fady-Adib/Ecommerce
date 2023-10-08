import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Core/service/Products.service';
import { Brand } from '../Core/InterFace/Product';

@Component({
  selector: 'app-Brands',
  templateUrl: './Brands.component.html',
  styleUrls: ['./Brands.component.css'],
})
export class BrandsComponent implements OnInit {
allBrands:Brand[]=[]

  constructor(private _ProductsService: ProductsService) {}

  ngOnInit() {this.getBrands()}
  getBrands() {
    this._ProductsService.brandsApi().subscribe({
      next:(res)=>{

        this.allBrands=res.data
         console.log(this.allBrands);
      }
    })
  }
}

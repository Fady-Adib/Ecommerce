import { Product } from './../Core/InterFace/Product';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './../Core/service/Products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css'],
})
export class ProductsComponent implements OnInit {
  allProducts: Product[] = [];
  id:string|null=""
type:string|null=""
  constructor(
    private _ProductsService: ProductsService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        params.get('id');
        console.log('id', params.get('id'));
        this.id = params.get('id');
           this.getProducts(``, `${this.id}`);
      },error:(err)=>{console.log(err)}
    });

  }
  getProducts(type: string, id: string) {
    this._ProductsService.productApi(type, id).subscribe({
      next: (res) => {
        this.allProducts = res.data;
      },
      error: () => {},
    });
  }
}




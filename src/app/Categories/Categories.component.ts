import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Core/service/Products.service';
import { Category } from '../Core/InterFace/Product';

@Component({
  selector: 'app-Categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  allCategories:Category [] = [];

  constructor(private _ProductsService: ProductsService) {}

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this._ProductsService.categoriesApi().subscribe({
      next: (res) => {
        this.allCategories = res.data;
        console.log(this.allCategories);
      },
    });
  }
}

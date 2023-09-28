import { Product } from './../Core/InterFace/Product';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './../Core/service/Products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

ngOnInit(): void {
    
}

}

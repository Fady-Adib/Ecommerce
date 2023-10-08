import { Component, OnInit } from '@angular/core';
import { CartService } from '../Core/service/Cart.service';
import { Orders } from '../Core/InterFace/Product';

@Component({
  selector: 'app-Orders',
  templateUrl: './Orders.component.html',
  styleUrls: ['./Orders.component.css'],
})
export class OrdersComponent implements OnInit {
  userOrders:Orders[]=[]
  constructor(private _CartService: CartService) {}
  ngOnInit() {
    this._CartService.getYourOrders().subscribe(
      {
        next:(res)=>{

          this.userOrders=res.data
          console.log(this.userOrders);
        }
      }
    )
  }
}

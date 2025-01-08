import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../rxjs/services/rxjs.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
     NgFor
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
     public cartItems: any[] = [];

     constructor(
          private rxjs: RxjsService
     ) { }

     ngOnInit(): void {
          this.rxjs.cartSubject$.subscribe(items => {
               this.cartItems = items;
          })

          
     }

     removeFromCart(productId: any) {
          this.rxjs.removeItem(productId)
     }
}

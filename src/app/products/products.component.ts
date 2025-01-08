import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../rxjs/services/rxjs.service';
import { NgFor } from '@angular/common';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    CartComponent
],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
     public products: any[] = [];

     constructor(private rxjs: RxjsService) {
          this.rxjs.getProducts().subscribe((res: any) => {
               this.products = res.products;
          });
     }

     ngOnInit(): void {
          
     }

     addToCart(product: any) {
          this.rxjs.addItem(product)
     }

     
}

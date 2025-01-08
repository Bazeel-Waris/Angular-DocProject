import { Component } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
     toasts: { message: string; type: string }[] = [];

     constructor(private rxjs: RxjsService) {}
   
     ngOnInit() {
       this.rxjs.toast$.subscribe((toast) => {
         this.toasts.push(toast);
         // Automatically remove toast after 5 seconds
         setTimeout(() => {
           this.toasts.shift();
         }, 5000);
       });
     }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../environment/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

const api = env.apiUrl;
const key = env.authToken;

@Injectable({
     providedIn: 'root',
})
export class RxjsService {

     private toastSubject = new Subject<{ message: string; type: string }>();
     toast$ = this.toastSubject.asObservable(); // Observable for subscribers

     c: any[] = [];
     cartSubject$ = new BehaviorSubject<any[]>([]);
     

     constructor(
          private http: HttpClient,
          // private geo: Geolocation,
     ) { }

     addItem(item: any) {
          console.log(this.cartSubject$.value)
          this.cartSubject$.next([...this.cartSubject$.value, item]);
     }
     removeItem(itemId: any) {
          this.cartSubject$.value.filter(item => item.id !== itemId)
          this.cartSubject$.next([...this.cartSubject$.value.filter(item => item.id !== itemId)]);
     }

     getProducts() {
          return this.http.get(`${env.productsUrl}/products`);
     }

     showToast(message: string, type: 'success' | 'error' | 'info') {
          this.toastSubject.next({ message, type }); // Emit a toast notification
     }

     getGeoLocation(city: string, limit = 5) {
          return this.http.get(`${api}/geo/1.0/direct?q=${city}&limit=${limit}&appid=${key}`)
     }

     whetherData(lat: number, lon: number) {
          return this.http.get(`${api}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
     }
}

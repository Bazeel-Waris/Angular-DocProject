import { Component } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';
import { catchError, map, mergeMap, of, retry, take } from 'rxjs';

@Component({
     selector: 'app-whether-info',
     standalone: true,
     imports: [],
     templateUrl: './whether-info.component.html',
     styleUrl: './whether-info.component.scss'
})
export class WhetherInfoComponent {
     public whether: any = {};

     constructor(
          private rxjsService: RxjsService
     ) { }

     ngOnInit() {

          // this.rxjsService.getGeoLocation('Lahore').pipe(
          //      .subscribe((res: any) => {
          //           this.quardinates = res[0];
          //           console.log(this.quardinates)
          //           this.rxjsService.whetherData(res[0].lat, res[0].lon).subscribe((res: any) => {
          //                console.log(res)
          //           })
          //      })
          this.rxjsService.getGeoLocation('Lahore').pipe(
               map(city => city),
               mergeMap((city: any) => this.rxjsService.whetherData(city[0].lat, city[0].lon)),
               catchError((err) => err)
          ).subscribe({
               next: (res: any) => {
                    this.whether = res.main;
               },
               error: (err: any) => {
                    console.error(err)
               }
          })

          of(1, 2, 3, 4, 5)
               .pipe(
                    map(n => {
                         if (n === 4) {
                              throw 'four!';
                         }
                         return n;
                    }),
                    catchError((err) => {
                         throw 'error in source. Details: ' + err;
                    }),
                    retry(3)
               )
               .subscribe({
                    next: x => console.log(x),
                    error: err => console.log(err)
               });
          // 1, 2, 3, I, II, III, IV, V
     }
}

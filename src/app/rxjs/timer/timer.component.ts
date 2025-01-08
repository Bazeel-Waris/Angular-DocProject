import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
     counter: number = 0;
     timer: Observable<number> = interval(1000);

     constructor() {
          this.timer.subscribe(res => {
               this.counter = res;
               // console.log(this.counter);
          })
     }

}

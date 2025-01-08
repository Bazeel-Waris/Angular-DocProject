import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { TimerComponent } from '../rxjs/timer/timer.component';
import { WhetherInfoComponent } from '../rxjs/whether-info/whether-info.component';
import { ToastComponent } from '../rxjs/toast/toast.component';
import { SampleComponent } from '../rxjs/sample/sample.component';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
     RouterModule,
     TimerComponent,
     WhetherInfoComponent,
     ToastComponent,
     SampleComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
     private clicksInDocument = fromEvent<PointerEvent>(document, 'click');
     private positions = this.clicksInDocument.pipe(map((ev) => ev.clientX))

     constructor(
          private router: Router,
          private route: ActivatedRoute,
     ) {
          this.positions.subscribe(x => console.log(x))
      }    

     goHome(): void {
          this.router.navigate(['/home'], { relativeTo: this.route });
     }
}

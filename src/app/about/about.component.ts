import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
     RouterModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
     constructor(
          private router: Router,
          private route: ActivatedRoute,
     ) { }

     goHome(): void {
          this.router.navigate(['/home'], { relativeTo: this.route });
     }
}

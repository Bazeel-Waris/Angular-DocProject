import { Component } from '@angular/core';
import { Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent {
     constructor(private router: Router) {

     }

     ngOnInit() {
          console.log(this.router.routerState)
     }
}

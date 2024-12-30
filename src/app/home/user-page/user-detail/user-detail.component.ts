import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
     RouterModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

     constructor(private route: ActivatedRoute) {}

     ngOnInit() {
          // this.route.fragment.subscribe(res => {
          //      console.log(res)
          // })
          // this.route.paramMap.subscribe(res => {
          //      console.log(res)
          // })
          // this.route.queryParamMap.subscribe(res => {
          //      console.log(res)
          // })
          // this.route.queryParams.subscribe(res => {
          //      console.log(res)
          // })
          // this.route.params.subscribe(res => {
          //      console.log(res)
          // })
     }
}

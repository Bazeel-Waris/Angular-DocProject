import { Component } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
     constructor(private rxjs: RxjsService) {}

     showSuccess() {
       this.rxjs.showToast('Operation Successful!', 'success');
     }
   
     showError() {
       this.rxjs.showToast('Something went wrong!', 'error');
     }
   
     showInfo() {
       this.rxjs.showToast('Here is some information.', 'info');
     }
}

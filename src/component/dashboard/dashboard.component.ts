import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor (private router: Router) {}
  
  btnClickCar() {
    this.router.navigateByUrl('/dashboard/cars');
  }

  btnClickStatis() {
    this.router.navigateByUrl('/dashboard/statis');
  }

  btnClickJob() {
    this.router.navigateByUrl('/dashboard/jobs');
  }

  btnClickBack() {
    this.router.navigateByUrl('/home');
  }

}

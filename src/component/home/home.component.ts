import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(private router: Router) {}

  toDashboard(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home/dashboard']);
  }
}

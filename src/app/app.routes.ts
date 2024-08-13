import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { CarComponent } from '../component/car/car.component';
import { JobComponent } from '../component/job/job.component';
import { StatisComponent } from '../component/statis/statis.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, 
        // children: [
        //     {path: 'dashboard', component: DashboardComponent},
        //     {path: 'cars', component: CarComponent},
        //     {path: 'jobs', component: JobComponent},
        //     {path: 'statis', component: StatisComponent}
        // ]
    },
    {path: 'home/dashboard', component: DashboardComponent},
    {path: 'dashboard/cars', component: CarComponent},
    {path: 'dashboard/jobs', component: JobComponent},
    {path: 'dashboard/statis', component: StatisComponent},
    {path:'**', redirectTo: 'home/'}
];





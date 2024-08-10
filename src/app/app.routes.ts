import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { CarComponent } from '../component/car/car.component';
import { JobComponent } from '../component/job/job.component';
import { StatisComponent } from '../component/statis/statis.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: DashboardComponent, 
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'cars', component: CarComponent},
            {path: 'jobs', component: JobComponent},
            {path: 'statis', component: StatisComponent}
        ]
    }
];





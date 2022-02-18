import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MygraphComponent } from './mygraph/mygraph.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'graph ',component:MygraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

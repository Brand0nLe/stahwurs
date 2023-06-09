import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PeoplePageComponent } from './components/pages/people-page/people-page.component';
import { PlanetsPageComponent } from './components/pages/planets-page/planets-page.component';
import { StarshipsPageComponent } from './components/pages/starships-page/starships-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'people', component: PeoplePageComponent },
  { path: 'planets', component: PlanetsPageComponent },
  { path: 'starships', component: StarshipsPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

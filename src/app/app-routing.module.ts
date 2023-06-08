import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: HomePageComponent }
  // { path: '', component: PeoplePageComponent }
  // { path: '', component: PlanetsPageComponent }
  // { path: '', component: StarshipsPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

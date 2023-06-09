import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PeoplePageComponent } from './components/pages/people-page/people-page.component';
import { PlanetsPageComponent } from './components/pages/planets-page/planets-page.component';
import { StarshipsPageComponent } from './components/pages/starships-page/starships-page.component';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    ModalComponent,
    HomePageComponent,
    PeoplePageComponent,
    PlanetsPageComponent,
    StarshipsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

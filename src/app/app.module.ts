import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ArtistComponent } from './component/artist/artist.component';
import { ArtistAddComponent } from './component/artist-add/artist-add.component';
import { Router } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomePageComponent } from './component/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistAddComponent,
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

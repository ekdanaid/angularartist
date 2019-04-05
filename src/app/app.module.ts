import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ArtistComponent } from './component/artist/artist.component';
import { ArtistDetailComponent } from './component/artist-detail/artist-detail.component';
import { ArtistEditComponent } from './component/artist-edit/artist-edit.component';
import { ArtistAddComponent } from './component/artist-add/artist-add.component';
import { Router } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomePageComponent } from './component/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistDetailComponent,
    ArtistEditComponent,
    ArtistAddComponent,
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

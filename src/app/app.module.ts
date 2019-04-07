import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistAddComponent } from './components/artist-add/artist-add.component';
import { Router } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { ArtistEditComponent } from './components/artist-edit/artist-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistAddComponent,
    NavBarComponent,
    HomePageComponent,
    ArtistEditComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

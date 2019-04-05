import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistComponent } from './component/artist/artist.component';
import { ArtistDetailComponent } from './component/artist-detail/artist-detail.component';
import { ArtistAddComponent } from './component/artist-add/artist-add.component';
import { ArtistEditComponent } from './component/artist-edit/artist-edit.component';
import { HomePageComponent } from './component/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'artist',
    component: ArtistComponent
  },
  {
    path: 'artist-details/:id',
    component: ArtistDetailComponent
  },
  {
    path: 'artist-add',
    component: ArtistAddComponent
  },
  {
    path: 'artist-edit/:id',
    component: ArtistEditComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistComponent } from './components/artist/artist.component';
import { ArtistAddComponent } from './components/artist-add/artist-add.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'artist',
    component: ArtistComponent
  },
  {
    path: 'artist-add',
    component: ArtistAddComponent
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
export class AppRoutingModule {}

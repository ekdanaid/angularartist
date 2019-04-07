import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistComponent } from './components/artist/artist.component';
import { ArtistAddComponent } from './components/artist-add/artist-add.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ArtistEditComponent } from './components/artist-edit/artist-edit.component';

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
  },
  {
    path: 'artist-edit/:id',
    component: ArtistEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

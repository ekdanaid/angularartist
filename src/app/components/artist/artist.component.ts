import { Component, OnInit, OnChanges } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Artistmodel } from 'src/app/model/artistdata';

class Resmodel {
  constructor(
    public name: string = '',
    public genre: string = ''
  ) { }
}

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass']
})
export class ArtistComponent implements OnInit {
  resmodels: any[] = [];

  constructor(
    private db: FirebaseService
  ) {
  }
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.db.GetUserList().snapshotChanges().subscribe(results =>
      results.forEach(result => result.payload.ref.on('value', snapshot =>
        this.resmodels.push(snapshot.val()))));
  }

  getById(id: string) {
    this.db.GetUser(`${id}`).snapshotChanges().subscribe(result =>
      result.payload.ref.on('value', snapshot => console.log(snapshot.val())));
  }

  delete(id: string) {
    this.db.DeleteUser(id);
  }
}

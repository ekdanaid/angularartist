import { Injectable } from '@angular/core';
import { Artistmodel } from '../model/artistdata';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  artistsRef: AngularFireList<any>;
  artistRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase) { }

  AddUser(data: Artistmodel) {
    this.artistsRef.push({
      name: data.name,
      genre: data.genre
    });
  }
  GetUser(id: string) {
    this.artistRef = this.db.object(`artist/${id}`);
    return this.artistRef;
  }

  GetUserList() {
    this.artistsRef = this.db.list('artist');
    return this.artistsRef;
  }

  // Update User
  UpdateUser(data: Artistmodel) {
    this.artistRef.update({
      name: data.name,
      genre: data.genre
    });
  }

  // Delete User
  DeleteUser(id: string) {
    this.artistRef = this.db.object(`artist/${id}`);
    this.artistRef.remove();
  }
}

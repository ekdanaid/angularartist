import { Injectable } from '@angular/core';
import { Artistmodel } from '../model/artistdata';
import {
  AngularFireList,
  AngularFireObject,
  AngularFireDatabase
} from '@angular/fire/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  artistsRef: AngularFireList<any>;
  artistRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  AddUser(data: Artistmodel) {
    this.db.database
      .ref('artist')
      .push()
      .set({ name: data.name.value, genre: data.genre.value });
  }
  GetUser(id: string) {
    return this.db.object('artist/' + id);
  }

  GetUserList() {
    return this.db.list('artist');
  }

  // Update User
  UpdateUser(data: any, id: string) {
    return this.db.object('artist/' + id).update(data);
  }

  // Delete User
  DeleteUser(id: string) {
    this.db.database
      .ref(`artist`)
      .child(id)
      .remove();
  }

  DeletebyHttp(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/artist/delete/${id}`);
  }
}

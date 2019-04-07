import { Component, OnInit, OnChanges } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Artistmodel } from 'src/app/model/artistdata';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  resmodels: any[] = [];
  keyarrs: any[] = [];

  constructor(private db: FirebaseService, private router: Router) {
    this.getAll();
  }
  ngOnInit() {}

  getAll() {
    this.db
      .GetUserList()
      .snapshotChanges()
      .subscribe(results => {
        results.forEach(result =>
          result.payload.ref.once('value', snapshot => {
            this.keyarrs.push(snapshot.key);
            this.resmodels.push(snapshot.val());
          })
        );
      });
    console.log(this.keyarrs);
    console.log(this.resmodels);
  }

  onEdit(i: any) {
    this.router.navigate(['artist-edit', `${this.keyarrs[i]}`]);
  }

  onDelete(i: any) {
    this.db.DeleteUser(this.keyarrs[i]);
    this.resmodels = this.resmodels.slice(i);
    this.keyarrs = this.keyarrs.slice(i);
    this.resmodels = [];
    this.keyarrs = [];
  }
}

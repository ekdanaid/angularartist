import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Artistmodel } from 'src/app/model/artistdata';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent implements OnInit {
  formEditArtist: FormGroup;
  formSubmitted: boolean;
  id: any;
  object: any;
  formname = '';
  formgenre = '';
  checkFlag: boolean;
  @ViewChild('staticModal') childModal: ModalDirective;

  get name() {
    return this.formEditArtist.controls.name;
  }

  get genre() {
    return this.formEditArtist.controls.genre;
  }

  get form() {
    return this.formEditArtist;
  }
  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getValue();
    this.createForm();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  private createForm() {
    this.formEditArtist = this.formBuilder.group({
      name: [this.formname, Validators.required],
      genre: [this.formgenre, Validators.required]
    });
  }

  private getValue() {
    const id = this.route.snapshot.paramMap.get('id');
    this.firebase
      .GetUser(id)
      .snapshotChanges()
      .subscribe(s => {
        this.object = s.payload.val();
        this.update();
      });
  }

  update() {
    this.name.setValue(this.object.name);
    this.genre.setValue(this.object.genre);
  }

  onClick() {
    this.formSubmitted = true;
    const reqform: Artistmodel = {
      name: this.name.value,
      genre: this.genre.value
    };
    console.log(reqform);
    let x: any;
    if (this.formEditArtist.valid) {
      x = this.firebase
        .UpdateUser(reqform, this.id)
        .then(s => this.router.navigate(['artist']));
    } else {
      this.checkFlag = false;
    }
  }
  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
}

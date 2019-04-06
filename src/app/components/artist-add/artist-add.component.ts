import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Artistmodel } from 'src/app/model/artistdata';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html',
  styleUrls: ['./artist-add.component.scss']
})
export class ArtistAddComponent implements OnInit {
  formAddArtist: FormGroup;
  formSubmitted: boolean;
  checkFlag: boolean;
  @ViewChild('staticModal') childModal: ModalDirective;

  get name() {
    return this.formAddArtist.controls.name;
  }
  get genre() {
    return this.formAddArtist.controls.genre;
  }

  get form() {
    return this.formAddArtist;
  }

  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.formAddArtist = this.formBuilder.group({
      name: ['', Validators.required],
      genre: ['', Validators.required]
    });
  }

  onClick() {
    this.formSubmitted = true;
    // this.isLoading = true;
    const reqform: Artistmodel = {
      name: this.name,
      genre: this.genre
    };
    console.log(reqform);
    console.log(`Check Flag : ${this.checkFlag}`);
    this.showChildModal();
    if (this.formAddArtist.valid) {
      this.firebase.AddUser(reqform);
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html',
  styleUrls: ['./artist-add.component.scss']
})
export class ArtistAddComponent implements OnInit {
  formAddArtist: FormGroup;
  formSubmitted: boolean;

  get form() {
    return this.formAddArtist;
  }
  get name() {
    return this.formAddArtist.controls.name;
  }
  get genre() {
    return this.formAddArtist.controls.genre;
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
}

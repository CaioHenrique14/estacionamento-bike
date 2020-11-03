import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.page.html',
  styleUrls: ['./spaces.page.scss'],
})
export class SpacesPage implements OnInit {
  @Input() listParking;
  @Input() spacesParking;
  constructor(
      public modalController: ModalController
    ) { }

  ngOnInit() {
    this.listParking =this.listParking[0]
    console.log(this.listParking);
    console.log(this.spacesParking);
  }

  public closeModal () {
    this.modalController.dismiss();
  }

}

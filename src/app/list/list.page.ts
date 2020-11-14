import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { SpacesPage } from '../spaces/spaces.page';



export interface Foo {
    bar: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  private _listParking: any;
  spacesParking: any;

  messages: Array<Foo> = [];

  status: any= [];

  constructor(public restService: RestService, public modalController: ModalController,public alertController:AlertController
  ) {

   }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.getParking();
    this.getParkingSpaces();
  }
  ionViewDidEnter() {
    console.log(this._listParking, this.spacesParking);
  }

  getParking() {

    this.restService.getAllParking().then((res: any) => {
      this._listParking = res;
    }).catch((err: any) => {
      console.error(err);
    });
  }
  getParkingSpaces() {
    this.restService.getAllParkingSpace().then((res: any) => {
      this.spacesParking = res;
    }).catch((err: any) => {
      console.error(err);
    });
  }

  async presentModal(id) {
    console.log(id);
    let list = [];
    let spaces = [];
    for (let index = 0; index < this.spacesParking.length; index++) {
      const element = this.spacesParking[index];
      if (element.idPlace == id) {
        spaces.push(element);
      }
    }
    for (let index = 0; index < this._listParking.length; index++) {
      const element = this._listParking[index];
      if (element.idPlace == id) {
        list.push(element);
      }
    }

    const modal = await this.modalController.create({
      component: SpacesPage,
      cssClass: 'my-custom-class',
      componentProps: {'listParking':list,'spacesParking':spaces}
    });
    return await modal.present();
  }


}

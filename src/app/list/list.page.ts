import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { SpacesPage } from '../spaces/spaces.page';
import { IonicMqttModule,MQTTService} from 'ionic-mqtt';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  private _listParking: any;
  spacesParking: any;
  private _mqttClient: any;
  private MQTT_CONFIG: {
    host: string,
    port: number,
    clientId: string,
  } = {
    host: "192.168.100.18",
    port: 1887,
    clientId: "mqtt-explorer-657f05f9",
  };

  private TOPIC: string[] = [];

  constructor(public restService: RestService, public modalController: ModalController
  ,private mqttService: MQTTService,public alertController:AlertController
  ) { }

  ngOnInit() {
    this._mqttClient = this.mqttService.loadingMqtt(this._onConnectionLost, this._onMessageArrived, this.TOPIC, this.MQTT_CONFIG);
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

  private _onConnectionLost(responseObject) {
    // connection listener
    // ...do actions when connection lost
    console.log('_onConnectionLost', responseObject);
  }

  private async _onMessageArrived(message) {
    // message listener
    // ...do actions with arriving message
    console.log('message', message);
    
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Atualização',
        subHeader: 'Mensagem',
        message: message,
        buttons: ['OK']
      });
  
      await alert.present();
    
  }
}

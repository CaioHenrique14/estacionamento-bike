import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { RestService } from '../services/rest.service';

declare var google;

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  geocoder: any;
  options: GeolocationOptions;
  currentPos: Geoposition;

  constructor(private geolocation: Geolocation,public restService: RestService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUserPosition();
  }

  getUserPosition(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;     

        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
}

  addMap(lat, long) {

    
    let latLng = new google.maps.LatLng(lat, long);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.getParking();
  }

  getParking(){
    this.restService.getAllPlaces().then((res:any)=>{
      console.log(res);
      res.forEach(element => {
        let latLng = new google.maps.LatLng(element.latitude, element.longitude);
      this.addMarker(latLng,element);      
      });
    }).catch((err:any)=>{
      console.error(err);
    });
    

  }
  addMarker(latLng,res) {
    console.log(latLng);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    console.log(this.map.getCenter());

    let content = `<p>${res.name}!</p></n><p>${res.description}!</p>`;
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

}

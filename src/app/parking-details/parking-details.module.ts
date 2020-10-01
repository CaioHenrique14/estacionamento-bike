import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingDetailsPageRoutingModule } from './parking-details-routing.module';

import { ParkingDetailsPage } from './parking-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingDetailsPageRoutingModule
  ],
  declarations: [ParkingDetailsPage]
})
export class ParkingDetailsPageModule {}

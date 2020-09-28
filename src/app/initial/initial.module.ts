import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialPageRoutingModule } from './initial-routing.module';

import { InitialPage } from './initial.page';

import { SuperTabsModule } from '@ionic-super-tabs/angular'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitialPageRoutingModule,
    SuperTabsModule
  ],
  declarations: [InitialPage]
})
export class InitialPageModule {}

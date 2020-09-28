import { AboutPage } from '../about/about.page';
import { AccountPage } from '../account/account.page';
import { ListPage } from '../list/list.page';
import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})
export class InitialPage implements OnInit, AfterViewInit {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  ListPage = ListPage;
  AboutPage = AboutPage;
  AccountPage = AccountPage;

  constructor() {
    
   }

  opts = {
    icon: false,
    label: true,
    toolbarPos: 'top',
    scrollable: true,
  };

  config: SuperTabsConfig = {
    debug: true,
    allowElementScroll: false,
  };

  tabs: any[] = [];

  ngAfterViewInit() {
    console.log('Super tabs', this.superTabs);
    // this.superTabs.selectTab(1);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;

  constructor(
    private statusBar: StatusBar,
    private fb: FormBuilder,
    private router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public restService: RestService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.fb.group({
      email: [''],
      senha: [''],
      toggle: [false]
    });
  }

  register() {
    console.log("Registrar");
    this.router.navigate(['/register'])
  }

  login() {

    // let body = {
    //   email: this.formLogin.get('email').value,
    //   password: this.formLogin.get('senha').value
    // }
    // this.restService.authUser(body).then((res: any) => {
    //   console.log(res);
    //   this.router.navigate(['/initial']);
    // }).catch((err: any) => {
    //   console.error(err);
    // });
    this.router.navigate(['/initial']);

  }


}

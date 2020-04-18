import { LocalStorageEncryptService } from './../../services/local-storage-encrypt-service';
import { AlertService } from './../../services/alert.service';
import { HttpService } from './../../services/http.model.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavParamsService } from 'src/app/services/nav-params.service';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from 'src/app/services/loading-service';
import { LoginLayoutComponent } from '../login-layout/login-layout.component';
import { Event } from 'src/app/services/event.service';
import { HttpServiceGeneric } from 'src/app/services/http.generic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navParamsService: NavParamsService,
    private httpService: HttpServiceGeneric,
    private alertService: AlertService,
    private localStorageEncryptService: LocalStorageEncryptService,
    private loadingService: LoadingService,
    private event: Event
  ) {
    //navParamsService.pushComponent(LoginLayoutComponent,{a:"a"});
    this.event.get("topico").subscribe((data) => {
      console.log("-.-.-.-.-.-.-.--..-.--.--..-.--..");

      console.log(data);

    }, (error) => {
      console.log(error);

    });
    this.createFormBuilder();
  }

  createFormBuilder() {
    this.formGroup = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    
  }

  login() {
    this.event.publish("topico", { data: "funciona" });
    let controls: any = this.formGroup.controls;
    let user: string = !controls["user"].errors ? controls["user"].value : null;
    let password: string = !controls["password"].errors ? controls["password"].value : null;
    if (user && password) {
      let data: any = {
        password: password,
        username: user
      };
      this.loadingService.show();
      /* this.httpService.post(environment.login, data).subscribe((res: any) => {
        if (res.status) {
          this.localStorageEncryptService.setToLocalStorage("userSession", res.data);

          this.navParamsService.push("main", { user: user });
        } else {
          this.alertService.warn("Ocurrio un error, intente mas tarde");
        }
        this.loadingService.hide();
      }, (error: HttpErrorResponse) => {
        let err: any = error;
        if (err.error && err.error.errors) {
          this.alertService.error(err.error.errors[0].description);
        }
        //this.alertService.error();
        this.loadingService.hide();
      }); */

    } else {
      this.alertService.warn("[Usuario] y [Password] son requeridos");
    }

  }
}

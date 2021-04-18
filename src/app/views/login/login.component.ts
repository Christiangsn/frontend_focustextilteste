import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';
import { RequestLogin } from '../../resources/models/RequestLogin'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin 

  constructor(
    private loginService: LoginService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public submitLogin() :void{
    this.loginService.submitLogin(this.requestLogin).subscribe(data => {
      console.log(data)
    }, httpErr => {
      this.alertService.error(httpErr.error);
    })
  }

}

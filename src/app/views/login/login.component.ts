import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/resources/services/login.service';
import { RequestLogin } from '../../resources/models/RequestLogin'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin 

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public submitLogin() :void{
    this.loginService.submitLogin(this.requestLogin).subscribe(data => {
      console.log(data)
    }, err => {
      console.error(err)
    })
  }

}

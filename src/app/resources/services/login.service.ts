import { Injectable } from '@angular/core';
import { RequestLogin } from '../../resources/models/RequestLogin'; 
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ResponseLogin} from '../models/ResponseLogin';
import {tap} from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private HttpClient: HttpClient,
    private authService: AuthService)
    { }

  public submitLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.HttpClient.post
      <ResponseLogin>(
        'http://localhost:3000/login/authenticate',
        requestLogin 
      ).pipe(tap( (loginResponse) => (this.authService.loginResponse = loginResponse)))
  }
}

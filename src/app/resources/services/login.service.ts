import { Injectable } from '@angular/core';
import { RequestLogin } from '../../resources/models/RequestLogin'; 
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ResponseLogin} from '../models/ResponseLogin'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  public submitLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.HttpClient.post
      <ResponseLogin>(
        'http://localhost:3000/login/authenticate', 
        requestLogin 
      );
  }
}

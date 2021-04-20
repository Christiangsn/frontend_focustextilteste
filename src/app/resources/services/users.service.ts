import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsers } from '../models/ResponseUsers';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private HttpClient: HttpClient,
  ) { }

  public getUsers(): Observable<ResponseUsers[]> {
    return this.HttpClient.get
      <ResponseUsers[]> (
        'http://localhost:3000/clients'
      );

  }
}

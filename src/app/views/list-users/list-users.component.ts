import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from 'src/app/resources/models/ResponseUsers';
import { UsersService } from 'src/app/resources/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})

export class ListUsersComponent implements OnInit {

  profiles!: ResponseUsers[];

  constructor(
    public UsersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers () {
    this.UsersService.getUsers().subscribe(res => {
      this.profiles = res;
      console.log(this.profiles)

    });
  }

}

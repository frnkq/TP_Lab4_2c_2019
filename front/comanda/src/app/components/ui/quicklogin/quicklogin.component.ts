import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-quicklogin',
  templateUrl: './quicklogin.component.html',
  styleUrls: ['./quicklogin.component.scss']
})
export class QuickloginComponent implements OnInit {
  users: {
    socio: { username: string, password: string },
    mozo: { username: string, password: string },
    bartender: { username: string, password: string },
    cervecero: { username: string, password: string },
    cocinero: { username: string, password: string }
  }

  @Output() onSelectedUser: EventEmitter<{ username: string, password: string }>;
  constructor() {
    this.users = {
      socio: {
        username: "fcanevali900",
        password: "fcanevali"
      },
      mozo: {
        username: "mozo",
        password: "mozo"
      },
      bartender: {
        username: "bartender",
        password: "bartender"
      },
      cervecero:
      {
        username: "cervecero",
        password: "cervecero"
      },
      cocinero:
      {
        username: "cocinero",
        password: "cocinero"
      },
    };
    this.onSelectedUser = new EventEmitter<{username:string, password: string}>();
  }

  ngOnInit() {
  }

  SelectUser(user: string) {
    switch (user) {
      case 'socio':
        this.onSelectedUser.emit(this.users.socio);
        break;
      case "mozo":
        this.onSelectedUser.emit(this.users.mozo);
        break;
      case "bartender":
        this.onSelectedUser.emit(this.users.bartender);
        break;
      case "cervecero":
        this.onSelectedUser.emit(this.users.cervecero);
        break;
      case "cocinero":
        this.onSelectedUser.emit(this.users.cocinero);
        break;
    }
  }
}

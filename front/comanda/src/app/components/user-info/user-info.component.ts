import { Component, OnInit, Input, Output } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() user;
  jwtService: JwtHelperService = new JwtHelperService();
  @Output() onHasLoggedOut: EventEmitter<any>;
  constructor() { 
    this.onHasLoggedOut = new EventEmitter<any>();
  }

  ngOnInit() {
    
  }

  Logout($event) 
  {
    this.user = this.jwtService.decodeToken($event).data;
    console.log("bye bye", $event);
    this.onHasLoggedOut.emit($event);
  }

}

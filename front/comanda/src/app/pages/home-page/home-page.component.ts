import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user = null;
  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.user = (this.localStorageService.GetToken() != null) ? this.jwtHelper.decodeToken(this.localStorageService.GetToken()).data : null;
  }

  CaptureUser($event)
  {
    this.user  = $event;
    console.log("got user", this.user);
  }

  Logout($event)
  {
    //TODO why am i alerting the token out? 
    this.user = null;
    alert("bye bye "+$event);
  }
}

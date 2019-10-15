import { Component, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent implements OnInit {
  @Output() onHasLoggedOut: EventEmitter<any>;
  constructor(private localStorageService: LocalStorageService) { 
    this.onHasLoggedOut = new EventEmitter<any>();
  }

  ngOnInit() {
  }
  Logout()
  {
    this.onHasLoggedOut.emit(this.localStorageService.GetToken());
    this.localStorageService.ClearToken();
  }
}

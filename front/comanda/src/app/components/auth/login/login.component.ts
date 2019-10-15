import { Component, OnInit } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private comandaService: ComandaService) { }

  ngOnInit() {
  }

  Login()
  {
    let username, password;
    let res;
    this.comandaService.Login(username, password).subscribe(function(response){res = response});
    console.log(res);
  }
}

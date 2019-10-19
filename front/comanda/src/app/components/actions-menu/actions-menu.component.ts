import { Component, OnInit, Input } from '@angular/core';
import { constants } from '../../constants';

@Component({
  selector: 'app-actions-menu',
  templateUrl: './actions-menu.component.html',
  styleUrls: ['./actions-menu.component.scss']
})
export class ActionsMenuComponent implements OnInit {
  @Input() role: string;
  canManageEmployees;
  canViewPedidos;
  constructor() { }

  ngOnInit() {
    switch(this.role)
    {
      case constants.roles.socio: 
        this.canManageEmployees = true;
        this.canViewPedidos = true;
        break;
      case constants.roles.mozo:
      case constants.roles.bartender:
      case constants.roles.cervecero:
      case constants.roles.cocinero:
        this.canViewPedidos = true;
    }
  }

}

import { Component } from '@angular/core';

import { MatDialog} from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private dialog: MatDialog){ }


  open_Login(){
    const enterAnimationDuration = '300ms'
    const exitAnimationDuration = '300ms'
    this.dialog.open(LoginComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../core/services/AuthService/auth.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SideBarComponent {

  constructor(private authService: Auth, private router: Router) {
  }

  logOut(){

    this.authService.logOut();
    this.router.navigate(['']);
  }
}


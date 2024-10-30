import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/AuthService/auth.service';
import { UserServiceService } from '../../services/UserService/user-service.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  constructor(private authService: Auth, private userService: UserServiceService, private router: Router) {
  }

  logOut(){

    const User = this.userService.getUserId();

    if(User){

    this.authService.logOut();

    this.router.navigate(['']);

    }
  }

}

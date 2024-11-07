import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../core/services/AuthService/auth.service';
import { UserServiceService } from '../../core/services/UserService/user-service.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SideBarComponent {

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

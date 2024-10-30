import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-page',
  standalone: true,
  imports: [SideMenuComponent, HeaderComponent, RouterLink],
  templateUrl: './patient-page.component.html',
  styleUrl: './patient-page.component.css'
})
export class PatientPageComponent {

}

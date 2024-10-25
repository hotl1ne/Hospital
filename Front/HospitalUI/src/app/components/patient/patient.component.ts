import { Component } from '@angular/core';
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [SideMenuComponent, HeaderComponent],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {

}

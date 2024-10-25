import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SideMenuComponent } from "../side-menu/side-menu.component";

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [HeaderComponent, SideMenuComponent],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {

}

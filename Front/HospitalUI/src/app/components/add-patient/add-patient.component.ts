import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [HeaderComponent, SideMenuComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent implements OnInit{
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  patientForm!: FormGroup

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      emailAdress: ['', [Validators.required]],
      adress: ['', [Validators.required]],
      age: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      marriedStatus: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      sugar: ['', [Validators.required]],
      heartBeat: ['', [Validators.required]],
      bloodPreasure: ['', [Validators.required]],
      haemoglobin: ['', [Validators.required]],
      symptoms: ['', [Validators.required]]
    });
  }

  constructor(private formBuilder: FormBuilder) {}
  
  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.selectedFile = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageUrl = reader.result;
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit():void {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value)
    }
  }

}

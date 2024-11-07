import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SideBarComponent } from "../../layouts/sidebar/sidebar.component";
import { HeaderComponent } from '../../layouts/header/header.component';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, SideBarComponent, HeaderComponent],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent implements OnInit{
  selectedFile: File | null = null;

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
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
    }
  }

  onSubmit():void {
    if (this.patientForm.valid) {

      const formData = new FormData();
    
      for (const key in this.patientForm.value) {
        formData.append(key, this.patientForm.value[key]);
      }

      if (this.selectedFile) {
        formData.append('photo', this.selectedFile, this.selectedFile.name);
      }

    }
  }

}

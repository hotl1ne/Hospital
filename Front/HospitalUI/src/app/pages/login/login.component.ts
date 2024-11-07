import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/AuthService/auth.service';
import { ILogin } from '../../models/Auth/IAuth.module';


@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  model: ILogin = { email: '', password: '' };

  constructor(private authService: Auth,private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.model = this.loginForm.value;
    }
    this.authService.login(this.model).subscribe({
      next: (response) =>
      {
        this.authService.saveToken(response.token);
        this.router.navigate(['Dashboard']);
      },
      error: (response) =>
      {
        alert("Ой... щось пішло не так")
      }
    })
  }
}

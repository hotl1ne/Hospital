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
  bad_password = false;
  bad_request = false;
  other_problem = false;
  model: ILogin = { email: '', password: '' };

  constructor(private authService: Auth,private formBuilder: FormBuilder, private router: Router
  ) {}

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
    const button = document.getElementById('loginBtn') as HTMLButtonElement;
    button!.disabled = true;
    this.authService.login(this.model).subscribe({
      next: (response) =>
      {
        this.authService.saveToken(response.token);
        localStorage.setItem("id", response.id);
        this.router.navigate(['Dashboard']);
      },
      error: (error) =>
      {
        if(error.status === 404){
        this.bad_password = true;
        }else if(error.status === 400)
        {
          this.bad_request = true;
        }
        else{
          this.other_problem = true;
        }


        button!.disabled = false;
      }
    })
  }

  resetWarnings(): void {
    this.bad_password = false;
    this.other_problem = false;
  }
}

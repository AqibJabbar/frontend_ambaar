import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../../../core/models/auth.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

 loginForm!: FormGroup;
  private authService = inject(AuthService)

  constructor(private fb: FormBuilder,private route:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      // rememberMe: [false]
    });
  }
  ngOnInit(){
    console.log("test")
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log(this.loginForm.value);
      this.route.navigateByUrl("/dashboard");
      const loginRequest: LoginRequest = { email, password };
      this.authService.login(loginRequest).subscribe(
        response => {
          console.log('Login successful:', response);
          // Handle successful login response here
        },
        error => {
          console.error('Login failed:', error);
          // Handle login error here
        }
      );
    }
  }
}
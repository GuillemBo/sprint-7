import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from '../../interfaces/starship';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup = this.fb.group({
  });


  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = this.fb.group({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.http.post<AuthResponse>('http://localhost:3000/register', this.registerForm.value)
        .subscribe(response => {
          // Guarda el token i redirigeix l'usuari
          localStorage.setItem('token', response.accessToken);
          this.router.navigate(['/']);
        }, error => {
          console.error('Error during registration:', error);
        });
    }
  }
}

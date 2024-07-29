import { AuthService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthResponse } from '../../interfaces/starship';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
  });
  returnUrl: string = '';

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Obtén la URL de retorno de los parámetros de consulta o establece una URL predeterminada
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  errorMessage: string = ''
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.AuthService.login(email, password).subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.error('Error during login:', error);
          this.errorMessage = error
        }
      );
    }
  }

}

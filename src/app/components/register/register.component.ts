import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(private fb: FormBuilder, private router: Router, public AuthService: AuthService) {
    this.registerForm = this.fb.group({
      username: new FormControl ('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
    });
  }


  errorMessage: string = ''

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { email, password, username } = this.registerForm.value;
      this.AuthService.register(email, password, username).subscribe(
        () => {
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error during registration:', error);
          this.errorMessage = error.error
        }
      );
    }
  }
}

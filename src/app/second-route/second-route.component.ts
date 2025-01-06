import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-second-route',
  templateUrl: './second-route.component.html',
  styleUrls: ['./second-route.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})

export class SecondRouteComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],  // assuming mobile number has 10 digits
      username: ['', [Validators.required, Validators.email]],  // username is an email
      password: ['', [Validators.required, this.passwordStrengthValidator]]
    });
  }

  // Password strength validator
  passwordStrengthValidator(control: any) {
    const password = control.value;
    if (!password) return null;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const minLength = password.length >= 8;

    if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && minLength) {
      return null;  // Valid password
    } else {
      return { weakPassword: 'Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special characters' };
    }
  }

  // On form submit
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

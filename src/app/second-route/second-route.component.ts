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
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordStrengthValidator]]
    });
  }

  passwordStrengthValidator(control: any) {
    const password = control.value;
    if (!password) return null;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const minLength = password.length >= 8;

    if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && minLength) {
      return null;
    } else {
      return { weakPassword: 'Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special characters' };
    }
  }  

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.valid) {
      alert("Success! No errors found.");
    } else {
      console.log('Form is invalid');
    }
  }

  getErrorMessage(controlName: string) {
    const control = this.registrationForm.get(controlName);

    if (this.submitted && control?.hasError('required')) {
      return 'This field is required';
    }
    if (this.submitted && control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (this.submitted && control?.hasError('pattern')) {
      return 'Please enter only 10 digit mobile number';
    }
    if (this.submitted && control?.hasError('weakPassword') && control.errors) {
      return control.errors['weakPassword'];
    }

    return '';
  }  
}

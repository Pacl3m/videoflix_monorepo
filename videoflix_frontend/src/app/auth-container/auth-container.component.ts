import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './auth-container.component.html',
  styleUrl: './auth-container.component.scss'
})
export class AuthContainerComponent {

  signUpForm: FormGroup;
  forgotPasswordForm: FormGroup;
  logInForm: FormGroup;
  resetPWForm: FormGroup;

  @Input() isLogin: boolean = false;
  @Input() isForgotPW: boolean = false;
  @Input() isSignUp: boolean = false;
  @Input() isResetPW: boolean = false;

  isText: boolean = false;
  type: string = 'password';


  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeated_password: ['', Validators.required]
    }, { validators: this.matchPasswords('password', 'repeated_password') });

    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.resetPWForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeated_password: ['', Validators.required]
    }, { validators: this.matchPasswords('password', 'repeated_password') });
  }

  togglePasswordVisibility() {
    this.isText = !this.isText
    this.type = this.isText ? "text" : "password";
  }

  matchPasswords(passwordKey: string, repeatedPasswordKey: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get(passwordKey)?.value;
      const repeatedPassword = group.get(repeatedPasswordKey)?.value;
      return password === repeatedPassword ? null : { passwordsDontMatch: true };
    };
  }
}

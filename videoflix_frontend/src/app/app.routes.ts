import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotPWComponent } from './forgot-pw/forgot-pw.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPWComponent } from './reset-pw/reset-pw.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgotPW', component: ForgotPWComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: 'resetPW', component: ResetPWComponent },
    { path: 'main', component: MainComponent },
];

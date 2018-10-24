import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AuthComponent } from './auth.component';

import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
    imports: [
        CommonModule,        
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        ForgetPasswordComponent,
        ResetPasswordComponent
    ],
    providers: []
})

export class AuthModule {

}
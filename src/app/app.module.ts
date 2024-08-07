import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input-v17';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { PhoneWidgetComponent } from './phone-widget/phone-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneWidgetComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMatIntlTelInputComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhoneWidgetComponent } from './phone-widget/phone-widget.component';
import bootstrap from '../main.server';
import { bootstrapApplication } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PhoneWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'phone-widget';
}
bootstrapApplication(AppComponent);
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input-v16';

@Component({
  selector: 'my-app',
  templateUrl: './phone-widget.component.html',
  styleUrls: ['./phone-widget.component.scss']
})
export class PhoneWidgetComponent implements OnInit {
  private status: 'online' | 'offline' | 'away' | 'transfer' = 'offline';
  private dialedNumber: string = '';
  private countryCode: string = '+1'; // Default country code

  @Input() public phoneFormControl: FormControl<NgxMatIntlTelInputComponent | null> = new FormControl(null, [Validators.required]);

  public phoneForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.phoneForm.addControl('phone', this.phoneFormControl);
  }

  public setStatus(newStatus: 'online' | 'offline' | 'away' | 'transfer'): void {
    this.status = newStatus;
  }

  public dialNumber(number: string): void {
    this.dialedNumber += number;
  }

  public call(): void {
    if (this.status === 'online' || this.status === 'transfer') {
      const phoneControlValue = this.phoneForm.get('phone')?.value;
      if (phoneControlValue) {
        const fullNumber = (phoneControlValue as any).internationalNumber;
        console.log(`Calling ${fullNumber}`);
        // Implement actual call functionality here
      }
    }
  }

  public clearDialedNumber(): void {
    this.dialedNumber = '';
  }
}
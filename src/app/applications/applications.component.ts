import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    CommonModule,
    MatExpansionModule,
    MatIconModule,
  ],
})
export class ApplicationsComponent {
  applicationsTempEstForm: FormGroup;
  applicationsCxpForm: FormGroup;
  applicationsDctcForm: FormGroup;

  isLocked: boolean = true; // Property to track the locked/unlocked state
  isEnabled: boolean = true; // Property to track the enabled/disabled state

  toggleLock() {
    this.isLocked = !this.isLocked; // Toggle the state when the button is clicked
  }

  toggleEnable() {
    this.isEnabled = !this.isEnabled; // Toggle the state when the button is clicked
  }

  constructor(private fb: FormBuilder) {
    this.applicationsTempEstForm = this.fb.group({
      enabled: [false],
      status: ['Healthy'],
      clientId: ['tmpest_mp129'],
    });

    this.applicationsCxpForm = this.fb.group({
      enabled: [false],
      status: ['Unhealthy'],
      clientId: ['cxp_mp129'],
    });

    this.applicationsDctcForm = this.fb.group({
      enabled: [false],
      status: ['Healthy'],
      clientId: ['dctc_mp129'],
    });
  }

  onSubmitTempEst() {
    console.log('Appllications Configuration:', this.applicationsTempEstForm.value);
  }
  onSubmitCxp() {
    console.log('Appllications Configuration:', this.applicationsCxpForm.value);
  }
  onSubmitDctc() {
    console.log('Appllications Configuration:', this.applicationsDctcForm.value);
  }    
}

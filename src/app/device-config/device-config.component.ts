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

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-device-config',
  templateUrl: './device-config.component.html',
  styleUrl: './device-config.component.scss',
  standalone: true,
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
    FormsModule,
    MatIconModule,
  ],
})
export class DeviceConfigComponent {
  deviceWsdmmForm: FormGroup;
  deviceElxisForm: FormGroup;
  deviceDauForm: FormGroup;

  isToggled = false; // or true, depending on your default state

  constructor(private fb: FormBuilder) {

    this.deviceWsdmmForm = this.fb.group({
      equipmentName: ['WSDMM'],
      softwareVersion: ['A5'],
      softwareBuild: ['B6'],
      softwareChecksum: ['123456789ABCDEF'],
      hardwareVersion: ['C3'],
      serialNumber: ['250486-500'],
      ipAddress: ['192.169.10.100'],
      url: ['https:/panorama'],
      status: ['Normal'],
    });

    this.deviceElixsForm = this.fb.group({
      equipmentName: ['ELIXS'],
      softwareVersion: ['A5'],
      softwareBuild: ['B6'],
      softwareChecksum: ['123456789ABCDEF'],
      hardwareVersion: ['C3'],
      serialNumber: ['250486-500'],
      ipAddress: ['192.169.10.101'],
      url: ['https:/elxis'],
      status: ['Normal'],
    });

    this.deviceDauForm = this.fb.group({
      equipmentName: ['DAU'],
      softwareVersion: ['A5'],
      softwareBuild: ['B6'],
      softwareChecksum: ['123456789ABCDEF'],
      hardwareVersion: ['C3'],
      serialNumber: ['251580-400'],
      ipAddress: ['192.169.10.102'],
      url: ['https:/dau'],
      status: ['Normal'],
    });    
  }

  onSubmitWsdmm() {
    console.log('WSDMM Device Configuration:', this.deviceWsdmmForm.value);
  }
  onSubmitElxis() {
    console.log('ELIXS Device Configuration:', this.deviceElixsForm.value);
  }
  onSubmitDau() {
    console.log('DAU Device Configuration:', this.deviceDauForm.value);
  }    
}

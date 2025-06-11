import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mqtt-config',
  styleUrl: './mqtt-config.component.scss',
  templateUrl: './mqtt-config.component.html',
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
    MatIconModule,
  ],
})
export class MqttConfigComponent {
  mqttForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mqttForm = this.fb.group({
      host: ['192.168.0.100'],
      port: ['1883'],
      clientId: ['wsdmm-mp129'],
      username: ['admin'],
      password: ['admin123'],
      protocol: ['mqtt'],
      status: ['Connected']

    });
  }

  onSubmit() {
    console.log('MQTT Configuration:', this.mqttForm.value);
  }
}

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
  selector: 'app-location-config',
  templateUrl: './location-config.component.html',
  styleUrl: './location-config.component.scss',
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
export class LocationConfigComponent {
  locationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.locationForm = this.fb.group({
      name: ['wsdmm-mp129'],
      subdivision: ['Gaveston'],
      latitude: ['29.30135'],
      longitude: ['-94.7977'],
      marker: ['mp129'],
    });
  }

  onSubmit() {
    console.log('Location Configuration:', this.locationForm.value);
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
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
  ],
})
export class ApplicationsComponent {
  applicationsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.applicationsForm = this.fb.group({
      railTempEst: [false],
      railTempEstStatus: ['Healthy'],
      crossingXpert: [false],
      crossingXpertStatus: ['Unhealthy'],
      dcTrackCircuit: [false],
      dcTrackCircuitStatus: ['Healthy'],
    });
  }

  onSubmit() {
    console.log('Appllications Configuration:', this.applicationsForm.value);
  }
}

import { Component } from '@angular/core';
import { MqttConfigComponent } from '../../app/mqtt-config/mqtt-config.component';
import { LocationConfigComponent } from '../../app/location-config/location-config.component';
import { ApplicationsComponent } from '../../app/applications/applications.component';
import { DeviceConfigComponent } from '../../app/device-config/device-config.component';

import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [
    MatTabsModule,
    MqttConfigComponent,
    LocationConfigComponent,
    ApplicationsComponent,
    DeviceConfigComponent,
  ],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss',
})
export class MainComponentComponent {}

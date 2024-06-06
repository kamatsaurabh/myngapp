import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import config from 'devextreme/core/config';
import { licenseKey } from './devextreme-license';
import { DxButtonModule } from 'devextreme-angular';
config({
    licenseKey:licenseKey
})
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,DxButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myngapp';
}

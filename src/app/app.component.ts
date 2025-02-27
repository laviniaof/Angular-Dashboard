import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { ButtonComponent } from './shared/button/button.component';
import { ControlComponent } from './shared/control/control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TicketsComponent,
    TrafficComponent,
    DashboardItemComponent,
    ButtonComponent,
    ControlComponent,
  ],
})
export class AppComponent {}

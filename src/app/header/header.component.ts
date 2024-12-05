import { Component } from '@angular/core';
import { NewTicketComponent } from '../dashboard/tickets/new-ticket/new-ticket.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

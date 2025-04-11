import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  //HTMLInputElement is a type

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    this.form().nativeElement.reset();
  }
}

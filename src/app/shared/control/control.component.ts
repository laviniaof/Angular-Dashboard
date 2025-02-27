import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  /**Instead of use @Input decorator, we are using signal */
  label = input.required<string>();
}

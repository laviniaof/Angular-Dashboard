import { Component } from '@angular/core';

@Component({
  /** We can use the attribute selector at selector */
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}

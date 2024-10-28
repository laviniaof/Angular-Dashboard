import { Component } from '@angular/core';

@Component({
  /**Here I'm using the attribute selector; the [] is the way you use in CSS to set up the attribute selector;
   * Inside [] we can name it the way we want. Outside, if I use 'button', all the tags that will use 'button' will
   * use this specific component*/
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}

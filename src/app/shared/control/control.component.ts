import {
  Component,
  ContentChild,
  ElementRef,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  /**Instead of use @Input decorator, we are using signal */
  label = input.required<string>();
  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLAreaElement
  >;

  OnClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}

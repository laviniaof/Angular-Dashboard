import {
  afterNextRender,
  afterRender,
  Component,
  contentChild,
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
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLAreaElement
  // >;

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('AFTER RENDER');
    });

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER');
    });
  }

  OnClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}

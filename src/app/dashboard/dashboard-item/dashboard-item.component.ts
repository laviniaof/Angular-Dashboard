import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  /**O decorator também pode ser substituído pelo signal.
   * Qualquer mudança no valor do signal atualiza automaticamente o que depende dele.
   * Sua sintaxe no HTML é diferente; ex: image().src
   */
  @Input({ required: true }) image!: { src: string; alt: string };
  @Input({ required: true }) title!: string;
}

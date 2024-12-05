import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  /**
   * Notice that here we are able to use the decorator @Input provided by Angular or the function input. Within <> 
   * that defines data types, we can put the data that we want to use at the aplication.   
   */

image = input.required<{ src: string; alt: string }>();
title = input.required<string>();
} 

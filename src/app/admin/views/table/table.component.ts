import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() columnData: any = [];
  @Input() rowData: any = [];
  @Input() pageData: number[] = [];

  shorting: boolean = false;

  sortingUp() {
    this.shorting = !this.shorting;
  }
  sortingDown() {
    this.shorting = !this.shorting;
  }
  
}

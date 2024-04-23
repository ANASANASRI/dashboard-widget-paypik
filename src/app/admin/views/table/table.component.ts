import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Marchand } from '../../model/marchand.model';
import { MarchandService } from '../../services/marchand.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  @Input() columnData: any = [];
  @Input() rowData: any = [];
  @Input() pageData: number[] = [];

  shorting: boolean = false;

  marchands: Marchand[] = [];
  searchTerm: string = '';

  sortingUp() {
    this.shorting = !this.shorting;
  }
  sortingDown() {
    this.shorting = !this.shorting;
  }

////////////////////  marchand.service  /////////////////////

  constructor(private marchandService: MarchandService) {}

  ngOnInit() {
    this.fetchMarchands();
  }

  fetchMarchands() {
    this.marchandService.getMarchands().subscribe(
      (data: Marchand[]) => {
        this.marchands = data;
      },
      (error) => {
        console.error('Error fetching marchands:', error);
      }
    );
  }


  //////////////////////////////////////////////////////////


  get filteredMarchands() {
    console.log('Search term:', this.searchTerm);
    return this.marchands.filter(marchand => 
      marchand.marchandName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


}

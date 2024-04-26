import { NgClass, NgIf } from '@angular/common';
import {  AfterViewInit, ViewChild,Component, Input, OnInit } from '@angular/core';
import { Marchand } from '../../model/marchand.model';
import { MarchandService } from '../../services/marchand.service';
;

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

  currentPage: number = 1;
  itemsPerPage: number = 5;

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


  ////////////////////////// SEARCH ////////////////////////////////

  get filteredMarchands() {
    // Apply search filter first
    const filteredData = this.marchands.filter(marchand => 
      marchand.marchandName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  
    // Calculate pagination indexes
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
  
    // Return the slice of data based on pagination indexes
    return filteredData.slice(startIndex, endIndex);
  }
  
  ////////////////////////////// send Id //////////////////////////////




  /////////////////////////// Pagination /////////////////////////////

  get totalPages() {
    return Math.ceil(this.marchands.length / this.itemsPerPage);
  }

nextPage() {
    if (this.currentPage < this.totalPages) {
        this.currentPage++;
        // Ensure itemsPerPage matches the selected option when navigating pages
        this.itemsPerPage = this.selectedItemsPerPage();
    }
  }

prevPage() {
    if (this.currentPage > 1) {
        this.currentPage--;
        // Ensure itemsPerPage matches the selected option when navigating pages
        this.itemsPerPage = this.selectedItemsPerPage();
    }
  }

onItemsPerPageChange(selectedValue: number) {
    // Update itemsPerPage immediately when the user selects an option
    this.itemsPerPage = selectedValue;
    console.log("Selected items per page:", this.itemsPerPage);
    // Reset current page to 1 when items per page changes
    this.currentPage = 1;
  }

  selectedItemsPerPage() {
    // Get the selected items per page from the dropdown
    const selectElement = document.getElementById('states') as HTMLSelectElement;
    const selectedValue = selectElement.value;
    // If selected option is null, fall back to using itemsPerPage directly
    if (selectedValue === null || selectedValue === '') {
        return this.itemsPerPage;
    } else {
        return parseInt(selectedValue);
    }
}

////////////////////

rejectOpen: boolean = false;

toggleReject() {
  this.rejectOpen = !this.rejectOpen;
}


}


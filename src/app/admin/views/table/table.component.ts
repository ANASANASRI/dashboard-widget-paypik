import { NgClass, NgIf } from '@angular/common';
import {  AfterViewInit, ViewChild,Component, Input, OnInit, ElementRef } from '@angular/core';
import { Marchand } from '../../model/marchand.model';
import { MarchandService } from '../../services/marchand.service';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

defineElement(lottie.loadAnimation);

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  @ViewChild('statusInput') statusInputRef!: ElementRef;
  @Input() columnData: any = [];
  @Input() rowData: any = [];
  @Input() pageData: number[] = [];

  shorting: boolean = false;
  deleteReussie: boolean = false; 


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
    let filteredData = this.marchands.filter(marchand => 
        marchand.marchandName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Apply status filter if a status is selected
    if (this.selectedOption1 !== '') {
        filteredData = filteredData.filter(marchand =>
            marchand.marchandStatus === this.selectedOption1
        );
    }

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
marchandId!: number;
marchandIdDeleted!: number;

  toggleReject(marchandId: number) {
    this.rejectOpen = !this.rejectOpen;
    this.marchandId = marchandId;
  }

//select input color text

  selectedOption: string = '';
  handleChange(event: any) {
  this.selectedOption = event.target.value;
  }

  selectedOption1: string = '';
  handleChange1(event: any) {
  this.selectedOption1 = event.target.value;
}

///////////////////// Delete marchand
  @ViewChild('modalElement') modalElement!: ElementRef;
  marchand !: Marchand | undefined;
  errorMessage!: boolean;

  deleteMarchand(marchandId: number) {
    this.marchandService.getMarchands().subscribe(
      (data: Marchand[]) => {
        this.marchands = data;
        
        const Id = marchandId; 

        this.marchand = this.marchands.find(marchand => marchand.marchandId === Number(Id));

        this.marchandService.deleteMarchand(marchandId).subscribe(
          (data) => {
            console.log('marchand deleted successfully:', data);
            this.modalElement.nativeElement.remove();

            // Assuming you have the marchandId available in your component
            this.marchandIdDeleted = marchandId; // Replace marchandId with the actual value

            this.deleteReussie = true;
            setTimeout(() => {
              this.deleteReussie = false;
              location.reload(); 
            }, 3000);
          },
          (error) => {
            console.log(error);
            this.modalElement.nativeElement.remove(); 
            this.errorMessage = true;
            setTimeout(() => {
              this.errorMessage = false;
            }, 5000);
          }

        );
    });
  }


  /////////////////// reset filter

  resetFilters(): void {
      this.searchTerm = ''; // Reset the search term to empty string
      this.selectedOption1 = ''; // Reset the selected option in the dropdown to empty string
      
      // Reset dropdown value
      (this.statusInputRef.nativeElement as HTMLSelectElement).value = '';
  }


  //  Swipe
  swipeMarchand(marchandId: number) {
    this.marchandService.getMarchands().subscribe(
      (data: Marchand[]) => {
        this.marchands = data;

        const Id = marchandId; 

        this.marchand = this.marchands.find(marchand => marchand.marchandId === Number(Id));
        
        if (this.marchand) {
          if (this.marchand.marchandStatus === "Active") {
            this.marchand.marchandStatus = "Inactive";
          } else if (this.marchand.marchandStatus === "Inactive") {
            this.marchand.marchandStatus = "Active";
          }else if (this.marchand.marchandStatus === "JustCreated") {
            this.marchand.marchandStatus = "Active";
          }

          this.marchandService.editMarchand(this.marchand).subscribe(
            (updatedMarchand: Marchand) => {
              console.log('Marchand swiped successfully:');
            },
            (error) => {
              console.error('Error swiping marchand:', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error fetching marchands:', error);
      }
    );
  }
}  
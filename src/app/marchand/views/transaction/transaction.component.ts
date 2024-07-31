import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PaymentMethod } from '../../model/payment-method.model';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { PaymentMethodService } from '../../services/payment-method.service';
import { Transaction } from '../../model/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];
  paymentMethods: PaymentMethod[] | undefined;
  filteredTransactions: Transaction[] = [];
  selectedPaymentMethod: string = '';
  marchandId!: number;
  transactionId!: number;
  itemsPerPage: number = 6;
  currentPage: number = 1;
  pagedTransactions: Transaction[] = [];
  totalPages: number = 0;
  displayPages: (number | string)[] = [];

  @ViewChild('dateInput') dateInput!: ElementRef;
  @ViewChild('statusInput') statusInput!: ElementRef;
  @ViewChild('clientNameInput') clientNameInput!: ElementRef;
  @ViewChild('paymentMethodInput') paymentMethodInput!: ElementRef;
  @ViewChild('detailedDescription') detailedDescription!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private paymentMethodService: PaymentMethodService
  ) {}

  ngOnInit(): void {
    //! Retrieve marchandId and transactionId from route parameters and load data ///////////////////////////////////////////////////////////////////////////////////////////-> 
    this.route.params.subscribe(params => {
      this.marchandId = +params['id'];
      this.transactionId = +params['transaId'];
      this.retrieveTransactions();
      this.loadPaymentMethods();
    });

    //! Add event listeners to filter inputs for dynamic filtering ///////////////////////////////////////////////////////////////////////////////////////////-> 
    this.dateInput.nativeElement.addEventListener('input', () => this.applyFilters());
    this.statusInput.nativeElement.addEventListener('change', () => this.applyFilters());
    this.clientNameInput.nativeElement.addEventListener('input', () => this.applyFilters());
    this.paymentMethodInput.nativeElement.addEventListener('change', () => this.applyFilters());
  }

  //! Retrieve transactions for the current marchandId and update pagination ///////////////////////////////////////////////////////////////////////////////////////////-> 
  retrieveTransactions(): void {
    this.transactionService.getTransactionsByMarchandId(this.marchandId).subscribe({
      next: (data: Transaction[]) => {
        this.transactions = data;
        this.filteredTransactions = data;
        this.calculatePages();
        this.setPage(this.currentPage);
      },
      error: (error) => console.error(error)
    });
  }

  //! Update the pages displayed in the pagination component based on total pages ///////////////////////////////////////////////////////////////////////////////////////////-> 
  updateDisplayPages(): void {
    const totalPages = Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      this.displayPages = Array.from({ length: totalPages }, (_, i) => i + 1);
      return;
    }

    const currentPage = this.currentPage;
    const pages: (number | string)[] = [];

    let startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages - 1, currentPage + Math.floor(maxPagesToShow / 2));

    if (startPage === 2) {
      endPage = Math.min(maxPagesToShow - 1, totalPages - 1);
    }
    if (endPage === totalPages - 1) {
      startPage = Math.max(totalPages - maxPagesToShow + 1, 2);
    }

    if (startPage > 2) {
      pages.push(1, '...');
    } else {
      for (let i = 1; i < startPage; i++) {
        pages.push(i);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push('...', totalPages);
    } else {
      for (let i = endPage + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    this.displayPages = pages;
  }

  //! Set the current page and update the list of transactions to display ///////////////////////////////////////////////////////////////////////////////////////////-> 
  setPage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredTransactions.length);
    this.pagedTransactions = this.filteredTransactions.slice(startIndex, endIndex);
    this.updateDisplayPages(); // Update page display
  }

  //! Update pagedTransactions based on the current page ///////////////////////////////////////////////////////////////////////////////////////////-> 
  paginateTransactions(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredTransactions.length);
    this.pagedTransactions = this.filteredTransactions.slice(startIndex, endIndex);
  }

  //! Calculate the total number of pages based on the number of filtered transactions ///////////////////////////////////////////////////////////////////////////////////////////-> 
  calculatePages(): void {
    this.totalPages = Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
    this.updateDisplayPages(); // Update page display
  }

  //! Navigate to the previous page if there is a previous page available ///////////////////////////////////////////////////////////////////////////////////////////-> 
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.setPage(this.currentPage);
    }
  }

  //! Navigate to the next page if there is a next page available ///////////////////////////////////////////////////////////////////////////////////////////-> 
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.setPage(this.currentPage);
    }
  }

  //! Apply filters to the transactions based on user input ///////////////////////////////////////////////////////////////////////////////////////////-> 
  applyFilters(): void {
    const date = this.dateInput.nativeElement.value;
    const status = this.statusInput.nativeElement.value;
    const clientName = this.clientNameInput.nativeElement.value;
    const paymentMethod = this.paymentMethodInput.nativeElement.value;
  
    let filteredTransactions = [...this.transactions];
  
    // Filter by date
    if (date) {
      filteredTransactions = filteredTransactions.filter(transaction => {
        const transactionDate = new Date(transaction.timestamp);
        const inputDate = new Date(date);
        return transactionDate.toDateString() === inputDate.toDateString();
      });
    }
  
    // Filter by status
    if (status) {
      filteredTransactions = filteredTransactions.filter(transaction =>
        transaction.status.toLowerCase() === status.toLowerCase()
      );
    }
  
    // Filter by client name
    if (clientName) {
      filteredTransactions = filteredTransactions.filter(transaction =>
        transaction.clientName.toLowerCase().includes(clientName.toLowerCase())
      );
    }

    // Filter by payment method
    
    // Define payment methods mapping
    const paymentMethodsMap: { [key: number]: string } = {
      1: "token",
      2: "carte bancaire",
      3: "Amanty",
      4: "P@yDirect",
      5: "PayPal"
    };
    
    if (paymentMethod) {
      filteredTransactions = filteredTransactions.filter(transaction => {
        const methodName = paymentMethodsMap[transaction.paymentMethodId]; // Get payment method name
        return methodName.toLowerCase().includes(paymentMethod.toLowerCase());
      });
    }
  
    // Update filtered transactions and pagination
    this.filteredTransactions = filteredTransactions;
    this.calculatePages();
    this.setPage(1);
  }
  
  
  //! Check if the value is a number ///////////////////////////////////////////////////////////////////////////////////////////-> 
  isNumber(value: any): value is number {
    return typeof value === 'number';
  }

  //! Reset all filters and show all transactions ///////////////////////////////////////////////////////////////////////////////////////////-> 
  resetFilters(): void {
    this.filteredTransactions = this.transactions;
    this.calculatePages();
    this.setPage(1);
    this.dateInput.nativeElement.value = '';
    this.statusInput.nativeElement.value = '';
    this.clientNameInput.nativeElement.value = '';
    this.paymentMethodInput.nativeElement.selectedIndex = 0;
  }

  //! Load all payment methods from the server ///////////////////////////////////////////////////////////////////////////////////////////-> 
  loadPaymentMethods(): void {
    this.paymentMethodService.getAll().subscribe(
      (data) => {
        this.paymentMethods = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //! Smoothly scroll to the detailed description section ///////////////////////////////////////////////////////////////////////////////////////////-> 
  scrollToSection() {
    if (this.detailedDescription && this.detailedDescription.nativeElement) {
      this.detailedDescription.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  selectedOption: string = '';
  //! Handle change event for a specific option ///////////////////////////////////////////////////////////////////////////////////////////-> 
  handleChange(event: any) {
    this.selectedOption = event.target.value;
  }

  selectedOption1: string = '';
  //! Handle change event for another option ///////////////////////////////////////////////////////////////////////////////////////////-> 
  handleChange1(event: any) {
    this.selectedOption1 = event.target.value;
  }

  //! Get text color based on transaction status ///////////////////////////////////////////////////////////////////////////////////////////-> 
  getStatusStyles(status: string): any {
    switch (status.toLowerCase()) {
      case 'completed':
        return { color: '#166534' }; // Green for completed
      case 'pending':
        return { color: '#854d0e' }; // Orange for pending
      case 'cancelled':
        return { color: '#991b1b' }; // Red for cancelled
      default:
        return {};
    }
  }

  //! Get badge background color based on transaction status ///////////////////////////////////////////////////////////////////////////////////////////-> 
  getStatusBadgeStyles(status: string): any {
    switch (status.toLowerCase()) {
      case 'completed':
        return { backgroundColor: '#dcfce7' }; // Light green for completed
      case 'pending':
        return { backgroundColor: '#fef9c3' }; // Light yellow for pending
      case 'cancelled':
        return { backgroundColor: '#fee2e2' }; // Light red for cancelled
      default:
        return {};
    }
  }

  //! Get icon stroke color based on transaction status ///////////////////////////////////////////////////////////////////////////////////////////-> 
  getStatusIconStyles(status: string): any {
    switch (status.toLowerCase()) {
      case 'completed':
        return { stroke: 'green' }; // Green for completed
      case 'pending':
        return { stroke: 'orange' }; // Orange for pending
      case 'cancelled':
        return { stroke: 'red' }; // Red for cancelled
      default:
        return {};
    }
  }
}

import { Component , ElementRef, OnInit, ViewChild } from '@angular/core';
import { PaymentMethod } from '../../model/payment-method.model';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { PaymentMethodService } from '../../services/payment-method.service';
import { Transaction } from '../../model/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {

  transactions: any[] = [];
  paymentMethods: PaymentMethod[] | undefined;
  filteredTransactions: any[] = [];
  selectedPaymentMethod: string = '';
  marchandId!: number;
  transactionId!: number;
  itemsPerPage: number = 6;
  currentPage: number = 1;
  pagedTransactions: any[] = [];
  pages: number[] = [];
  totalPages: number = 0;

  @ViewChild('dateInput') dateInput!: ElementRef;
  @ViewChild('statusInput') statusInput!: ElementRef;
  @ViewChild('clientNameInput') clientNameInput!: ElementRef;
  @ViewChild('paymentMethodInput') paymentMethodInput!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private paymentMethodService: PaymentMethodService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.marchandId = +params['id'];
      this.transactionId = +params['transaId'];
      this.retrieveTransactions();
      this.loadPymentMethods();
    });

    // Call applyFilters() whenever the input value changes
    this.dateInput.nativeElement.addEventListener('input', () => this.applyFilters());
    this.statusInput.nativeElement.addEventListener('change', () => this.applyFilters());
    this.clientNameInput.nativeElement.addEventListener('input', () => this.applyFilters());
    this.paymentMethodInput.nativeElement.addEventListener('change', () => this.applyFilters());
  }

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

  // Filter transactions by date
  filterByDate(date: string): void {
    if (!date) {
      this.filteredTransactions = [...this.transactions];
      return;
    }
    const inputDate = new Date(date);
    this.filteredTransactions = this.transactions.filter(transaction => {
      const transactionDate = new Date(transaction.timestamp);
      return (
        transactionDate.getFullYear() === inputDate.getFullYear() &&
        transactionDate.getMonth() === inputDate.getMonth() &&
        transactionDate.getDate() === inputDate.getDate()
      );
    });
    this.calculatePages();
    this.setPage(1);
  }

  // Filter transactions by status
  filterByStatus(status: string): void {
    if (!status) {
      this.filteredTransactions = [...this.transactions];
      return;
    }
    this.filteredTransactions = this.transactions.filter(transaction =>
      transaction.status.toLowerCase() === status.toLowerCase()
    );
    this.calculatePages();
    this.setPage(1);
  }

  // Filter transactions by client name
  filterByClientName(name: string): void {
    this.filteredTransactions = this.transactions.filter(transaction =>
      transaction.clientName.toLowerCase().includes(name.toLowerCase())
    );
    this.calculatePages();
    this.setPage(1);
  }

  // Filter transactions by payment method
  filterByPaymentMethod(paymentMethod: string): void {
    if (!paymentMethod) {
      this.filteredTransactions = [...this.transactions];
      return;
    }
    this.transactionService.getTransactionsByPaymentMethodName(paymentMethod).subscribe({
      next: (data: Transaction[]) => {
        this.filteredTransactions = data;
        this.calculatePages();
        this.setPage(1);
      },
      error: (error) => console.error(error)
    });
  }

  // Apply all active filters
  applyFilters(): void {
    let filteredTransactions = [...this.transactions];
    const date = this.dateInput.nativeElement.value;
    if (date) {
      filteredTransactions = filteredTransactions.filter(transaction => {
        const transactionDate = new Date(transaction.timestamp);
        const inputDate = new Date(date);
        return transactionDate.toDateString() === inputDate.toDateString();
      });
    }
    const status = this.statusInput.nativeElement.value;
    if (status) {
      filteredTransactions = filteredTransactions.filter(transaction =>
        transaction.status.toLowerCase() === status.toLowerCase()
      );
    }
    const clientName = this.clientNameInput.nativeElement.value;
    if (clientName) {
      filteredTransactions = filteredTransactions.filter(transaction =>
        transaction.clientName.toLowerCase().includes(clientName.toLowerCase())
      );
    }
    const paymentMethod = this.paymentMethodInput.nativeElement.value;
    if (paymentMethod) {
      this.transactionService.getTransactionsByPaymentMethodName(paymentMethod).subscribe({
        next: (data: Transaction[]) => {
          filteredTransactions = data;
          this.filteredTransactions = filteredTransactions;
          this.calculatePages();
          this.setPage(1);
        },
        error: (error) => console.error(error)
      });
      return;
    }
    this.filteredTransactions = filteredTransactions;
    this.calculatePages();
    this.setPage(1);
  }

  // Reset all filters to default
  resetFilters(): void {
    this.filteredTransactions = this.transactions;
    this.calculatePages();
    this.setPage(1);
    this.dateInput.nativeElement.value = '';
    this.statusInput.nativeElement.value = '';
    this.clientNameInput.nativeElement.value = '';
    this.paymentMethodInput.nativeElement.selectedIndex = 0;
  }

  // Load all payment methods
  loadPymentMethods(): void {
    this.paymentMethodService.getAll().subscribe(
      (data) => {
        this.paymentMethods = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Get status styles for rendering
  getStatusStyles(status: string): any {
    switch (status.toLowerCase()) {
      case 'completed':
        return { color: '#166534 ' };
      case 'pending':
        return { color: '#854d0e ' };
      case 'cancelled':
        return { color: '#991b1b ' };
      default:
        return {};
    }
  }

  // Get status badge styles for rendering
  getStatusBadgeStyles(status: string): any {
    switch (status.toLowerCase()) {
      case 'completed':
        return { backgroundColor: '#dcfce7' };
      case 'pending':
        return { backgroundColor: '#fef9c3' };
      case 'cancelled':
        return { backgroundColor: '#fee2e2' };
      default:
        return {};
    }
  }

  // Get status icon styles for rendering
  getStatusIconStyles(status: string): any {
    switch (status.toLowerCase()) {
      case 'completed':
        return { stroke: 'green' };
      case 'pending':
        return { stroke: 'yellow' };
      case 'cancelled':
        return { stroke: 'red' };
      default:
        return {};
    }
  }

  // Calculate total number of pages
  calculatePages(): void {
    this.totalPages = Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
    this.pages = Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  // Handle page change event
  onPageChange(page: number): void {
    this.setPage(page);
  }

  // Set current page and update paged transactions
  setPage(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredTransactions.length);
    this.pagedTransactions = this.filteredTransactions.slice(startIndex, endIndex);
  }

  // Navigate to specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.setPage(page);
    }
  }

  // Navigate to previous page
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateTransactions();
    }
  }

  // Navigate to next page
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateTransactions();
      }
    }

  // Paginate transactions based on current page
  paginateTransactions(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredTransactions.length);
    this.pagedTransactions = this.filteredTransactions.slice(startIndex, endIndex);
  }

  // Calculate the number of transactions for the current marchand
  calculateMarchandTransactions(): number {
    return this.filteredTransactions.filter(transaction => transaction.marchandId === this.marchandId).length;
  }

  //////////// Scroll to section //////////////

  @ViewChild('detailedDescription') detailedDescription!: ElementRef;

  scrollToSection() {
    if (this.detailedDescription && this.detailedDescription.nativeElement) {
      this.detailedDescription.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
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

}

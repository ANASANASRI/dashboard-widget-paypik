import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import {  registerables } from 'chart.js';
import { pageTransition } from 'src/app/shared/utils/animations';
import { Transaction } from '../../model/transaction.model';
import { TransactionService } from '../../services/transaction.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [pageTransition]
})
export class DashboardComponent implements OnInit {
  showTitle: boolean = false;
  totalTransactions = 0;
  transactions: Transaction[] = [];
  marchantId!: number;
  paymentMethodCounts: { [key: string]: number } = {};
  eventDate: string | undefined;
  totalYearAmountMAD: number = 0;
  totalDayAmountMAD: number = 0;
  
  @ViewChild('detailedDescription') detailedDescription!: ElementRef;

  data: any;
  options: any;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.marchantId = +params['id'];
      this.retrieveTransactions();
    });

    this.options = {
      scales: { x: { display: false }, y: { display: false } },
      plugins: { legend: { position: 'right', align: 'center' } }
    };

    this.eventDate = this.formatDate(new Date(), 'MMM dd, yyyy', 'en');
  }

  private formatDate(date: Date, format: string, locale: string): string {
    return new Intl.DateTimeFormat(locale, { month: 'short', day: '2-digit', year: 'numeric' }).format(date);
  }

  retrieveTransactions(): void {
    this.transactionService.getTransactionsByMarchandId(this.marchantId).subscribe({
      next: (data: Transaction[]) => {
        this.transactions = data;
        this.paymentMethodCounts = this.countPaymentMethods(this.transactions);
        this.data = {
          labels: this.mapPaymentMethodLabels(Object.keys(this.paymentMethodCounts)),
          datasets: [{ label: '# of Votes', data: Object.values(this.paymentMethodCounts), backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(212, 115, 212, 0.2)',
          ] }]
        };
        this.calculateTotalYearAmountMAD();
        this.calculateTotalDayAmountMAD();
        this.createChart();
      },
      error: (error) => console.error(error)
    });
  }

  private countPaymentMethods(transactions: Transaction[]): { [key: string]: number } {
    const paymentMethodCounts: { [key: string]: number } = {};
    transactions.forEach(transaction => {
      const paymentMethodId = transaction.paymentMethodId;
      paymentMethodCounts[paymentMethodId] = (paymentMethodCounts[paymentMethodId] || 0) + 1;
    });
    return paymentMethodCounts;
  }

  private mapPaymentMethodLabels(paymentMethodIds: string[]): string[] {
    return paymentMethodIds.map(id => {
      switch (id) {
        case '1': return 'Token';
        case '2': return 'Card';
        case '3': return 'Amanty';
        case '4': return 'Paiement direct';
        case '5': return 'paypal';
        default: return '';
      }
    });
  }

  private calculateTotalYearAmountMAD(): void {
    const exchangeRates: { [key: string]: number } = {
      'MAD': 1,
      'EUR': 10.81081081,
      'USD': 10 
      // Add more currencies and their exchange rates as needed
    };

    const currentYear = new Date().getFullYear();
    this.totalYearAmountMAD = this.transactions.reduce((total, transaction) => {
      const transactionYear = new Date(transaction.timestamp).getFullYear();
      if (transactionYear === currentYear) {
        const amountMAD = transaction.amount * exchangeRates[transaction.currency];
        return total + amountMAD;
      }
      return total;
    }, 0);
  }

  private calculateTotalDayAmountMAD(): void {
    const exchangeRates: { [key: string]: number } = {
      'MAD': 1,
      'EUR': 10.81081081,
      'USD': 10 
      // Add more currencies and their exchange rates as needed
    };

    const currentDate = new Date().toDateString();
    this.totalDayAmountMAD = this.transactions.reduce((total, transaction) => {
      const transactionDate = new Date(transaction.timestamp).toDateString();
      if (transactionDate === currentDate) {
        const amountMAD = transaction.amount * exchangeRates[transaction.currency];
        return total + amountMAD;
      }
      return total;
    }, 0);
  }

  scrollToSection(): void {
    if (this.detailedDescription && this.detailedDescription.nativeElement) {
      this.detailedDescription.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  get calculateTotalTransactions(): number {
    return this.transactions.length;
  }

  private createChart(): void {
    const ctx = document.getElementById('areaWiseSale') as HTMLCanvasElement;
    new Chart(ctx, { type: 'doughnut', data: this.data, options: this.options });
  }

  // here we will add a code
}

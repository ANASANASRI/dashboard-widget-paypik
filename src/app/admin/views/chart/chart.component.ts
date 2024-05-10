import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../model/transaction.model';
import { TransactionService } from '../../services/transaction.service';
import { IncreaseDirective } from '../../directives/increase.directive';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'] 
})
export class ChartComponent implements OnInit {

  @Input() marchandId!: number;

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { // Moved the declaration of transactionService into the constructor
  
  }

  ngOnInit(): void {
    this.fetchTransactionsByMarchand(this.marchandId); // Fetch transactions when component initializes
  }

  ///////////// Fetch number of transactions by marchand  

  totalAmount!: number;
  previousTotalAmount: number = 0;
  uniqueClientIds: Set<string> = new Set();
  uniqueClientIdsLastYear: Set<string> = new Set();




  fetchTransactionsByMarchand(marchandId: number) {
    this.transactionService.getTransactionsByMarchand(marchandId).subscribe(
      (data: Transaction[]) => {
        const exchangeRates: { [key: string]: number } = {
          'MAD': 1,
          'EUR': 0.092701,
          'USD': 0.1
        };

        const currentDate = new Date();
        const previousYear = currentDate.getFullYear() - 1;
        const previousYearStartDate = new Date(previousYear, 0, 1);
        const previousYearEndDate = new Date(previousYear, 11, 31);

        let totalMADAmount = 0;
        let previousYearTotalMADAmount = 0;
        
        for (const transaction of data) {
          const transactionDate = new Date(transaction.timestamp);
          if (transactionDate >= previousYearStartDate && transactionDate <= previousYearEndDate) {
            previousYearTotalMADAmount += this.convertToMAD(transaction.amount, transaction.currency, exchangeRates);
            this.uniqueClientIdsLastYear.add(transaction.clientId); // Add client ID to set for last year
          }
          totalMADAmount += this.convertToMAD(transaction.amount, transaction.currency, exchangeRates);
          this.uniqueClientIds.add(transaction.clientId); // Add client ID to set
        }

        this.previousTotalAmount = previousYearTotalMADAmount;
        this.totalAmount = totalMADAmount;

      },
      (error) => {
        console.error('Error fetching transactions amounts:', error);
      }
    );
  }
  
  // Function to convert amount to MAD
  convertToMAD(amount: number, currency: string, exchangeRates: { [key: string]: number }): number {
    const exchangeRate = exchangeRates[currency];
    return amount * exchangeRate;
  }
  
  get totalAmounts() {
    if (this.totalAmount !== undefined && this.totalAmount !== null) {
      return this.totalAmount.toFixed(1);
  } else {
      return 'N/A'; 
  }
  }

  get totalTransactionsByMarchand() {
    return this.transactions.length;
  }  

  ///////////// get current year

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  //////////////// porcentage
  calculatePercentageChange(): { value: string, isPositive: boolean } {
  if (this.previousTotalAmount === 0) {
    return { value: 'N/A', isPositive: true };
  }

  const percentageChange = ((this.totalAmount - this.previousTotalAmount) / this.previousTotalAmount) * 100;
  const formattedPercentageChange = percentageChange.toFixed(1) + '%';

  return {
    value: formattedPercentageChange,
    isPositive: percentageChange >= 0
  };
}

////////////////////////////

  calculateUniqueClientCount(): number {
    return this.uniqueClientIds.size;
  }
  
  calculateUniqueClientCountLastYear(): number {
    return this.uniqueClientIdsLastYear.size;
  }

  calculateClientCountPercentageChange(): { value: string, isPositive: boolean } {
    const currentYearClients = this.calculateUniqueClientCount();
    const lastYearClients = this.calculateUniqueClientCountLastYear();

    if (lastYearClients === 0) {
      return { value: 'N/A', isPositive: true };
    }

    const percentageChange = ((currentYearClients - lastYearClients) / lastYearClients) * 100;
    const formattedPercentageChange = percentageChange.toFixed(1) + '%';

    return {
      value: formattedPercentageChange,
      isPositive: percentageChange >= 0
    };
  }
}
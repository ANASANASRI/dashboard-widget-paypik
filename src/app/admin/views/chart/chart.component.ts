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
          'EUR': 10.81081081,
          'USD': 10 
          // Add more currencies and their exchange rates as needed
        };
  
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentYearStartDate = new Date(currentYear, 0, 1);
        const currentYearEndDate = new Date(currentYear, 11, 31);
  
        let totalMADAmount = 0;
        let uniqueClientIds = new Set<string>();
  
        for (const transaction of data) {
          const transactionDate = new Date(transaction.timestamp);
          if (transactionDate >= currentYearStartDate && transactionDate <= currentYearEndDate) {
            totalMADAmount += this.convertToMAD(transaction.amount, transaction.currency, exchangeRates);
            uniqueClientIds.add(transaction.clientId);
          }
        }
  
        this.totalAmount = totalMADAmount;
        this.uniqueClientIds = uniqueClientIds;
  
      },
      (error) => {
        console.error('Error fetching transactions amounts:', error);
      }
    );
  }
  
  private convertToMAD(amount: number, currency: string, exchangeRates: { [key: string]: number }): number {
    return amount * exchangeRates[currency];
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
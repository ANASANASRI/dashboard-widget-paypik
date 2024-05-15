import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../model/transaction.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

    @Input() marchandId!: number; // Define input property to receive marchandId

    constructor(
      private transactionService: TransactionService
    ) {}

    ngOnInit(): void {
      this.retrieveTransactions();
    }

    chartData: number[] = [];
    labels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    tooltipContent: string = '';
    tooltipOpen: boolean = false;
    tooltipX: number = 0;
    tooltipY: number = 0;

    showTooltip(e: MouseEvent) {
      console.log(e);
      this.tooltipContent = (e.target as HTMLElement).textContent || '';
      this.tooltipX = (e.target as HTMLElement).offsetLeft - (e.target as HTMLElement).clientWidth;
      this.tooltipY = (e.target as HTMLElement).clientHeight + (e.target as HTMLElement).clientWidth;
      this.tooltipOpen = true;
    }

    hideTooltip() {
      this.tooltipContent = '';
      this.tooltipOpen = false;
      this.tooltipX = 0;
      this.tooltipY = 0;
    }

    // Get transactions by marchand id

    transactions: Transaction[] = [];

    retrieveTransactions(): void {
      this.transactionService.getTransactionsByMarchandId(this.marchandId).subscribe({
        next: (data: Transaction[]) => {
          this.transactions = data;
          this.calculateChartData();
        },
        error: (error) => console.error(error)
      });
    }

    // Define a maximum height for the bars
    maxBarHeight: number = 200; // Change this value as needed

    // Calculate the scaling factor based on the maximum value and maximum bar height
    scaleFactor: number = 1;

    calculateChartData(): void {
        // Initialize chartData with zeros for each month
        this.chartData = Array(12).fill(0);

        // Find the maximum value in the chart data
        const max = Math.max(...this.chartData);

        // Calculate the scaling factor
        this.scaleFactor = max > 0 ? this.maxBarHeight / max : 12;

        // Loop through transactions and increment the count for the respective month
        this.transactions.forEach(transaction => {
            const month = new Date(transaction.timestamp).getMonth();
            this.chartData[month]++;
        });
    }

}

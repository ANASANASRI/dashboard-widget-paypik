import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../model/transaction.model';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'] // Corrected 'styleUrl' to 'styleUrls'
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

  fetchTransactionsByMarchand(marchandId: number) {
    this.transactionService.getTransactionsByMarchand(marchandId).subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }

  get totalTransactionsByMarchand() {
    return this.transactions.length;
  }  
}
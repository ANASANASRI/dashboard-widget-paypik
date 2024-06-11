import { transition } from '@angular/animations';
import { Transaction } from './../../model/transaction.model';
import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import {  registerables } from 'chart.js';
import { pageTransition } from 'src/app/shared/utils/animations';
import { MarchandService } from '../../services/marchand.service';
import { Marchand } from '../../model/marchand.model';
import { TransactionService } from '../../services/transaction.service';
import { ExtchangeService } from '../../services/extchange.service';
import { forkJoin, map } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [pageTransition]
})
export class DashboardComponent implements OnInit {
  eventDate: any = formatDate(new Date(), 'MMM dd, yyyy', 'en');

  ngOnInit(): void {
    this.fetchMarchands();
    this.fetchTransactions();
    this.fetchTransactionsTotalAmounts();
    var myChart = new Chart("areaWiseSale", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
        }]
      },
      options: {
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          },
        },
        plugins: {
          legend: {
            position: 'right',
            align: 'center',
          },
        },
      },
    });
  }


////////////////////  services  /////////////////////

  marchands: Marchand[] = [];
  transactions: Transaction[]=[];
  totalAmount!: number;

  constructor(
    private marchandService: MarchandService,
    private extchangeService: ExtchangeService,
    private transitionService : TransactionService
  ) {}

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

  fetchTransactions() {
    this.transitionService.getTransactions().subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }


// Extchange Rate With Api
  // fetchTransactionsTotalAmounts() {
  //   this.transitionService.getTransactions().subscribe(
  //     (data: Transaction[]) => {
  //       // Create an array to store conversion observables
  //       const conversionObservables = [];

  //       // Iterate through each transaction and create an observable for currency conversion
  //       for (const transaction of data) {
  //         conversionObservables.push(this.extchangeService.convertCurrency(transaction.amount, transaction.currency));
  //       }

  //       // Use forkJoin to wait for all conversion observables to complete
  //       forkJoin(conversionObservables).pipe(
  //         map((convertedAmounts: string[]) => {
  //           // Calculate the sum of converted amounts
  //           let totalMADAmount = 0;
  //           for (const amount of convertedAmounts) {
  //             totalMADAmount += parseFloat(amount);
  //           }
  //           return totalMADAmount;
  //         })
  //       ).subscribe(
  //         (totalMADAmount: number) => {
  //           this.totalAmount = totalMADAmount;
  //         },
  //         (error) => {
  //           console.error('Error calculating total MAD amount:', error);
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.error('Error fetching transactions amounts:', error);
  //     }
  //   );
  // }

  fetchTransactionsTotalAmounts() {
    this.transitionService.getTransactions().subscribe(
      (data: Transaction[]) => {
        // Define exchange rates
        const exchangeRates: { [key: string]: number } = {
          'MAD': 1,
          'EUR': 10.81081081,
          'USD': 10 
          // Add more currencies and their exchange rates as needed
        };
  
        // Calculate the sum of transaction amounts in MAD
        let totalMADAmount = 0;
        for (const transaction of data) {
          // Convert each transaction amount to MAD
          if (transaction.currency in exchangeRates) {
            totalMADAmount += this.convertToMAD(transaction.amount, transaction.currency, exchangeRates);
          } else {
            console.error(`No exchange rate found for ${transaction.currency} to MAD`);
          }
        }
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
      return this.totalAmount.toFixed(3);
  } else {
      return 'N/A'; 
  }
  }

  get totalMarchands() {
    return this.marchands.length;
  }

  get totalTransactions() {
    return this.transactions.length;
  }

}



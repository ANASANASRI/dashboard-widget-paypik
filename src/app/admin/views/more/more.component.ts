import { MarchandService } from './../../services/marchand.service';
import { Component ,OnInit,ViewChild, ElementRef } from '@angular/core';
import { formatDate } from '@angular/common';
import Chart from 'chart.js/auto';
import {  registerables } from 'chart.js';
import { pageTransition } from 'src/app/shared/utils/animations';
import { ActivatedRoute } from '@angular/router';
import { Marchand } from '../../model/marchand.model';
import { MethodService } from '../../services/method.service';
import { PaymentMethod } from '../../model/paymentmethod.model';
import { Transaction } from '../../model/transaction.model';
import { TransactionService } from '../../services/transaction.service';
Chart.register(...registerables);

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrl: './more.component.css',
  animations: [pageTransition]
})
export class MoreComponent implements OnInit{
  marchandId!:number;
  marchands: Marchand[] = [];
  //transactions: Transaction[] = [];
  paymentMethods: PaymentMethod[] = [];
  methods: PaymentMethod[] = [];
  // Déclaration d'un ensemble pour stocker les numéros de méthode uniques
  methodNumbers: number[] = [];
  status: boolean | undefined;
  paymentMethodId!: number;

  constructor(
    private route: ActivatedRoute,
    private marchandService: MarchandService,
    private methodService:MethodService,
    private transitionService : TransactionService
  ) {}

  ngOnInit(): void {
    this.fetchMarchands();
    this.route.params.subscribe(params => {
      this.marchandId = params['marchanId'];
      this.paymentMethodId = params['paymentMethodId'];
      this.fetchTransactionsByMarchand(this.marchandId);
    Chart.register(...registerables); // Enregistrez les éléments Chart.js nécessaires

    this.retrieveMarchandById();
    
    this.getPaymentMethods();
    });
  }

  //find marchand by id 
  retrieveMarchandById(): void {
    this.marchandService.getMarchandById(this.marchandId).subscribe({
      next: (data: any) => { // Utilisation de 'any' temporairement pour résoudre le problème de type
      console.log('Marchand data:', data);
        this.marchands.push(data as Marchand); // Cast 'data' en tant que Marchand
    
      },
      error: (error) => console.error(error),
    });
  }
  
  
  findStatusForMethod(method: PaymentMethod): void {
    this.marchandService.findStatusMarchandPayment(this.marchandId, method.paymentMethodId)
      .subscribe(status => {
        method.methodStatus = status; // Assigner le statut à la méthode
        console.log('Method:', method.methodName, 'status:', status);
      });
  }
  
  updateStatus(paymentMethodId: number): void {
    this.methodService
      .updateMarchandMethodStatus(paymentMethodId, this.marchandId)
      .subscribe({
        next: () => {
          console.log('Status updated successfully');
          // Vous pouvez effectuer des actions supplémentaires après la mise à jour du statut si nécessaire
        },
        error: (error) => {
          console.error('Error updating status:',error);
          // Gérer l'erreur si la mise à jour échoue
        },
      });
  }
  getPaymentMethods(): void {
    this.methodService.getAll().subscribe(
      (data) => {
        this.paymentMethods = data;
        
        console.log('les methodes pay:', this.paymentMethods);
        
        // Call findStatusForMethod for each payment method
        this.paymentMethods.forEach((method) => {
          this.findStatusForMethod(method);
        });
      },
      (error) => {
        console.error('Error fetching unverified demandes:', error);
      }
    );
  }
  
  
  isMethodChecked(method: PaymentMethod): boolean {
    return this.methods.some(m => m.paymentMethodId === method.paymentMethodId && m.methodStatus === true );
  }
  
  /*update implement */
  
  
    ////////////Scroll to section //////////////
  
    @ViewChild('detailedDescription') detailedDescription!: ElementRef;
  
    scrollToSection() {
      if (this.detailedDescription && this.detailedDescription.nativeElement) {
        this.detailedDescription.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    //////////////////////////////


    get getmarchandId() {
      return this.marchandId;
    }
  
    marchand: Marchand | undefined;
  
    fetchMarchands() {
      this.marchandService.getMarchands().subscribe(
        (data: Marchand[]) => {
          this.marchands = data;
          
          const Id = this.marchandId; 
  
          this.marchand = this.marchands.find(marchand => marchand.marchandId === Number(Id));
          if (!this.marchand) {
            console.error('Marchand not found with id:', Id);
          }
        },
        (error) => {
          console.error('Error fetching marchands:', error);
        }
      );
    }

    ///////////// Fetche number of transaction by marchand  
    
    transactions: Transaction[]=[];
  
    fetchTransactionsByMarchand(marchandId:number) {
      this.transitionService.getTransactionsByMarchand(marchandId).subscribe(
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

    get thisMarchand() {
      return this.marchand;
    } 
    /////////////  Fetch marchand by id 
    // fetchMarchandByid(marchandId :number) {
    //   this.marchandService.getMarchandById(marchandId).subscribe(
    //     (data: Marchand[]) => {
    //       this.marchands = data;
          
    //       const Id = this.marchandId; 
  
    //       this.marchand = this.marchands.find(marchand => marchand.marchandId === Number(Id));
    //       if (!this.marchand) {
    //         console.error('Marchand not found with id:', Id);
    //       }
    //     },
    //     (error) => {
    //       console.error('Error fetching marchands:', error);
    //     }
    //   );
    // }
}

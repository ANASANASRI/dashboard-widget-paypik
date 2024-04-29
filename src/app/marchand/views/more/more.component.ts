import { Component ,OnInit,ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { pageTransition } from 'src/app/shared/utils/animations';
import { MarchandService } from '../../services/marchand.service';
import { TransactionService } from '../../services/transaction.service';
import { PaymentMethodService } from '../../services/payment-method.service';
import { ActivatedRoute } from '@angular/router';
import { Marchand } from '../../model/marchand.model';
import { Transaction } from '../../model/transaction.model';
import { PaymentMethod } from '../../model/payment-method.model';

Chart.register(...registerables);

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrl: './more.component.css',
  animations: [pageTransition]
})
export class MoreComponent implements OnInit{
  marchands: Marchand[] = [];
  transactions: Transaction[] = [];
  paymentMethods: PaymentMethod[] = [];
  marchandId!: number;
  transactionId!: number;

  constructor(
    private route: ActivatedRoute,
    private marchandService: MarchandService,
    private transactionService: TransactionService,
    private paymentMethodService: PaymentMethodService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.marchandId = +params['id'];
      this.transactionId = +params['transaId'];
      this.retrieveMarchandAndTransaction();
    });
  }

  // Retrieve both marchand and transaction details
  retrieveMarchandAndTransaction(): void {
    this.retrieveMarchandById();
    this.retrieveTransactionById();
  }

  // Retrieve marchand by ID
  retrieveMarchandById(): void {
    this.marchandService.getMarchandById(this.marchandId).subscribe({
      next: (data: Marchand) => {
        console.log('Données du marchand :', data);
        this.marchands.push(data);
      },
      error: (error) => console.error(error),
    });
  }

  // Retrieve transaction by ID
  retrieveTransactionById(): void {
    this.transactionService.getTransactionById(this.transactionId).subscribe({
      next: (data: Transaction) => {
        console.log('Données du Transaction :', data);
        this.transactions.push(data);
        this.retrievePaymentMethodById(data.paymentMethodId);
      },
      error: (error) => console.error(error),
    });
  }

  // Retrieve payment method by ID
  retrievePaymentMethodById(paymentMethodId: number): void {
    this.paymentMethodService.getPymentMethodeById(paymentMethodId).subscribe({
      next: (data: PaymentMethod) => {
        this.paymentMethods.push(data);
        console.log('Détails de la méthode de paiement :', data);
      },
      error: (error) => console.error(error),
    });
  }

  ////////////Scroll to section //////////////

  @ViewChild('detailedDescription') detailedDescription!: ElementRef;

  scrollToSection() {
    if (this.detailedDescription && this.detailedDescription.nativeElement) {
      this.detailedDescription.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

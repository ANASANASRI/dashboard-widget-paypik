import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MarchandService } from '../../services/marchand.service';
import { TransactionService } from '../../services/transaction.service';
import { PaymentMethodService } from '../../services/payment-method.service';
import { ActivatedRoute } from '@angular/router';
import { Marchand } from '../../model/marchand.model';
import { Transaction } from '../../model/transaction.model';
import { PaymentMethod } from '../../model/payment-method.model';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css'],
})
export class MoreComponent implements OnInit {
  marchands: Marchand[] = [];
  transactions: Transaction[] = [];
  paymentMethods: PaymentMethod[] = [];
  marchandId!: number;
  transactionId!: number;
  loading: boolean = false;

  @ViewChild('content', { static: false }) content!: ElementRef;

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
      this.clientName = params['clientName']; 
      this.retrieveMarchandAndTransaction();
    });
  }

  // Retrieve both marchand and transaction details
  retrieveMarchandAndTransaction(): void {
    this.retrieveMarchandById();
    this.retrieveTransactionById();
    this.retrieveNumberOfTransactions();
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

  // Scroll to section
  @ViewChild('detailedDescription') detailedDescription!: ElementRef;

  scrollToSection() {
    if (this.detailedDescription && this.detailedDescription.nativeElement) {
      this.detailedDescription.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


  // Pdf downloading

  startLoading() {
    // Set loading to true after a delay of 500 milliseconds
    setTimeout(() => {
      this.loading = true;
      this.downloadPdf();
    });
  }

  downloadPdf() {
    const content = this.content.nativeElement;
  
    // Increase DPI for better quality
    const dpi = 300; // Adjust as needed
  
    html2canvas(
      content, 
      { 
        allowTaint: true, 
        useCORS: true,
        scale: dpi / 96 // 96 is the default DPI
      }
    ).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
  
      // Define padding
      const paddingTop = 80; // Adjust as needed
  
      // Add header image
      const headerImg = new Image();
      headerImg.src = 'assets/images/logo/header.png'; // Replace with the path to your header image
      headerImg.onload = () => {
        const headerWidth = imgWidth; // Use the full width of the page for the header
        const headerHeight = (headerImg.height * headerWidth) / headerImg.width;
        pdf.addImage(headerImg, 'PNG', 0, 0, headerWidth, headerHeight);
  
        // Add footer image
        const footerImg = new Image();
        footerImg.src = 'assets/images/logo/footer.png'; // Replace with the path to your footer image
        footerImg.onload = () => {
          const footerWidth = imgWidth; // Use the full width of the page for the footer
          const footerHeight = (footerImg.height * footerWidth) / footerImg.width;
          const footerY = pdf.internal.pageSize.height - footerHeight; // Position the footer at the bottom of the page
          pdf.addImage(footerImg, 'PNG', 0, footerY, footerWidth, footerHeight);
  
          // Add content image with padding
          pdf.addImage(imgData, 'PNG', 4.5, paddingTop, imgWidth, imgHeight);
  
          pdf.save('content.pdf');
  
          this.loading = false; // Set loading to false after PDF generation is complete
        };
      };
    });
  }  
  
  ////////////////  numberOfTransactions 

  numberOfTransactions: number = 0;
  clientName!: string;
  
  retrieveNumberOfTransactions(): void {
    this.transactionService
      .getNumberOfTransactionsByClientAndMarchand(
        this.marchandId,
        this.clientName
      )
      .subscribe({
        next: (count: number) => {
          this.numberOfTransactions = count;
          console.log('Nombre de transactions:', count);
        },
        error: (error) =>
          console.error(
            'Erreur lors de la récupération du nombre de transactions:',
            error
          ),
      });
  }

}

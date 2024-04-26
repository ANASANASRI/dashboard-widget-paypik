import { DemandeService } from './../../../services/demande.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Demandedto } from 'src/app/commercial/model/demandedto.model';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';

@Component({
  selector: 'app-demande',
  standalone: true,
  imports: [
    CommonModule,
    ModalModule
  ],
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demandeId!: number;
  thisDemande!: Demandedto;


  constructor(
    private demandeService: DemandeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // Retrieve the demandeId from the route parameters
    this.route.params.subscribe(params => {
      this.demandeId = params['demandeId'];
      this.getDemande(this.demandeId);
    });
    
  }

  getDemande(demandeId: number) {
    this.demandeService.getDemande(demandeId).subscribe(
      (data) => {
        this.thisDemande = data; // Assign directly to thisDemande
      },
      (error) => {
        console.error('Error fetching demande:', error);
      }
    );
  }

  updateDemandeRejected(demandeId: number) {
    this.demandeService.updateDemandeRejected(demandeId).subscribe(
      (data) => {
        console.log('Demande rejected successfully:', data);
        window.location.href = '/commercial/validation';
        // Call any additional functions or handle the response as needed
      },
      (error) => {
        console.error('Error rejecting demande:', error);
      }
    );
  }

  updateDemandeAccepted(demandeId: number) {
    this.demandeService.updateDemandeAccepted(demandeId).subscribe(
      (data) => {
        console.log('Demande accepted successfully:', data);
        window.location.href = '/commercial/validation';
        // Call any additional functions or handle the response as needed
      },
      (error) => {
        console.error('Error accepting demande:', error);
      }
    );
  }



  get demande() {
    return this.thisDemande
  }
    
////////////////////

modalOpen: boolean = false;
rejectOpen: boolean = false;

toggleAccept() {
    this.modalOpen = !this.modalOpen;
}
toggleReject() {
  this.rejectOpen = !this.rejectOpen;
}
  
}
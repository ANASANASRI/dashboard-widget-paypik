import { DemandeService } from './../../services/demande.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { pageTransition } from 'src/app/shared/utils/animations';
import { Demandedto } from '../../model/demandedto.model';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
  animations: [pageTransition]
})
export class ValidationComponent implements OnInit{


  unverifiedDemandes: Demandedto[] = [];
  currentDemandeId: number | null = null; 
  socket$: WebSocketSubject<any> = webSocket('ws://your-backend-url');

  constructor(
    private demandeService: DemandeService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getAllDemandesNotVerified();
  }

  
// //every 5 seconds
//   ngOnInit(): void {
//     this.getAllDemandesNotVerified();
//     this.pollDemandes(); // Start polling for updates
//   }
//   pollDemandes() {
//     setInterval(() => {
//       this.getAllDemandesNotVerified();
//     }, 5000); // Poll every 5 seconds (adjust as needed)
//   }


  getAllDemandesNotVerified() {
    this.demandeService.getAllDemandesNotVerified().subscribe(
      (data) => {
        this.unverifiedDemandes = data;
      },
      (error) => {
        console.error('Error fetching unverified demandes:', error);
      }
    );
  }

  ////////////////////////////////////////////

  loadTest(demande: Demandedto) {
    // Toggle the currentDemandeId based on whether the demande outlet is already open
    if (this.currentDemandeId === demande.demandeId) {
      // If the demande outlet is already open for the selected demande, close it
      this.router.navigate(['commercial', 'validation']);
      this.currentDemandeId = null; // Reset the selected demande ID
    } else {
      // If the demande outlet is not open for the selected demande, open it
      this.currentDemandeId = demande.demandeId;
      this.router.navigate(['commercial', 'validation', { outlets: { demande: ['marchand', demande.demandeId] } }]);
    }
  }

}








// import { DemandeService } from './../../services/demande.service';
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Router } from "@angular/router";
// import { pageTransition } from 'src/app/shared/utils/animations';
// import { Demandedto } from '../../model/demandedto.model';

// @Component({
//   selector: 'app-validation',
//   templateUrl: './validation.component.html',
//   styleUrls: ['./validation.component.css'],
//   animations: [pageTransition]
// })
// export class ValidationComponent implements OnInit, OnDestroy {

//   unverifiedDemandes: Demandedto[] = [];
//   currentDemandeId: number | null = null;

//   constructor(
//     private demandeService: DemandeService,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.demandeService.getAllDemandesNotVerifiedSEE().subscribe(
//       (data) => {
//         this.unverifiedDemandes.push(data);
//       },
//       (error) => {
//         console.error('Error fetching unverified demandes:', error);
//       }
//     );
//   }

//   ngOnDestroy(): void {
//     this.demandeService.closeSSEConnection();
//   }

//   loadTest(demande: Demandedto) {
//     if (this.currentDemandeId === demande.demandeId) {
//       this.router.navigate(['commercial', 'validation']);
//       this.currentDemandeId = null;
//     } else {
//       this.currentDemandeId = demande.demandeId;
//       this.router.navigate(['commercial', 'validation', { outlets: { demande: ['marchand', demande.demandeId] } }]);
//     }
//   }
// }
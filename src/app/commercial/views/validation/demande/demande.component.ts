import { DemandeService } from './../../../services/demande.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Demandedto, Status } from 'src/app/commercial/model/demandedto.model';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/admin/services/user.service';


@Component({
  selector: 'app-demande',
  standalone: true,
  imports: [
    CommonModule,
    ModalModule,
    FormsModule
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
    private fb: FormBuilder,
    private userService: UserService
  ) {  }

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

  // updateDemandeRejected

  loading: boolean = false;

  startReject(demandeId: number) {
    this.loading = true;
    this.updateDemandeRejected(demandeId);
  }

  updateDemandeRejected(demandeId: number) {
    this.demandeService.updateDemandeRejected(demandeId).subscribe(
      (data) => {
        console.log('Demande rejected successfully:', data);
        window.location.href = '/commercial/validation';
      },
      (error) => {
        console.error('Error rejecting demande:', error);
      },
      () => {
        this.loading = false; // Ensure loading is reset after the request completes
      }
    );
  }

//////////////////////////////////////////////////////////////////////////////////////
updateDemandeAccepted(demandeId: number) {
  this.demandeService.updateDemandeAccepted(demandeId).subscribe(
    (data) => {
      console.log('Demande accepted successfully:', data);

      this.demandeService.getDemande(demandeId).subscribe(
        (demandeData) => {
          console.log('Fetched demande data:', demandeData);

          const addFormData: any = {
            username: demandeData.demandeMarchandName,
            firstName: demandeData.demandeMarchandName,
            lastName: demandeData.demandeMarchandName,
            email: demandeData.demandeMarchandEmail,
            profilLogoUrl: demandeData.demandeMarchandLogoUrl || '',
            roles: ['ROLE_MARCHAND'],
            status: 'Inactive',
            password: this.generatePassword()
          };

          this.userService.addUser(addFormData).subscribe(
            () => {
              console.log('User added successfully');
              window.location.href = '/commercial/validation';
            },
            (error) => {
              console.error('Error adding user:', error);

              if (error && error.error && typeof error.error === 'object') {
                if (error.error.general) {
                  error.error.general.forEach((message: string) => {
                    console.error(`Error: ${message}`);
                  });
                } else {
                  console.error('Error response:', error.error);
                }
              } else {
                console.error('Unexpected error format:', error);
              }
            }
          );
        },
        (error) => {
          console.error('Error fetching demande:', error);
        }
      );
    },
    (error) => {
      console.error('Error accepting demande:', error);
    }
  );
}

generatePassword(length: number = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log("password",password)
    return password;
  }


//////////////////////////////////////////////////////////////////////////////////////
updateDemandeUpdateAndAccepted(demandeId: number ,updatedDemande: any) {
  this.demandeService.updateDemandeUpdateAndAccepted(demandeId ,updatedDemande).subscribe(
    (response) => {
      this.toggleEdit();
      console.log('Demande updated and accepted:', response);
      

      // Fetch demande information
      this.demandeService.getDemande(demandeId).subscribe(
        (demandeData) => {
          console.log('Fetched demande data:', demandeData);

          // Map demandeData to SignupRequest object
          const addFormData: any = {
            username: demandeData.demandeMarchandName,
            firstName: demandeData.demandeMarchandName,
            lastName: demandeData.demandeMarchandName,
            email: demandeData.demandeMarchandEmail,
            profilLogoUrl: demandeData.demandeMarchandLogoUrl || '',
            roles: ['ROLE_MARCHAND'],
            status: 'Inactive',
            password: this.generatePassword()
          };

          // Add the user
          this.userService.addUser(addFormData).subscribe(
            () => {
              console.log('User added successfully');
              location.reload();
            },
            (error) => {
              console.error('Error adding user:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching demande:', error);
        }
      );
    },
    (error) => {
      console.error('Error updating and accepting demande:', error);
    }
  );
}

//////////////////////////////////////////////////////////////////////////////////////
  get demande() {
    return this.thisDemande || {};
  }
  
////////////////////

  modalOpen: boolean = false;
  rejectOpen: boolean = false;
  editModalOpen: boolean = false;

  toggleAccept() {
      this.modalOpen = !this.modalOpen;
  }
  toggleReject() {
    this.rejectOpen = !this.rejectOpen;
  }

  selectedOption: string = '';

  handleChange(event: any) {
    this.selectedOption = event.target.value;
  }

  ///// Edit

  editFormData: any = {
    demandeMarchandName: '',
    demandeMarchandLogoUrl: '',
    demandeMarchandFormejuridique: '',
    demandeMarchandRcIf: '',
    demandeMarchandSiegeAddresse: '',
    demandeMarchandDgName: '',
    demandeMarchandTypeActivite: '',
    demandeMarchandHost: '',
    demandeMarchandEmail: '',
    demandeMarchandPhone: '',
    demandeMarchandAnneeActivite: '',
    demandeMarchandDescription: ''
  };

  toggleEdit() {
    this.editModalOpen = !this.editModalOpen;
    if (this.editModalOpen) {
      this.editFormData = {
        demandeId: this.demande.demandeId,
        demandeMarchandName: this.demande.demandeMarchandName,
        demandeMarchandLogoUrl: this.demande.demandeMarchandLogoUrl,
        demandeMarchandFormejuridique: this.demande.demandeMarchandFormejuridique,
        demandeMarchandRcIf: this.demande.demandeMarchandRcIf,
        demandeMarchandSiegeAddresse: this.demande.demandeMarchandSiegeAddresse,
        demandeMarchandDgName: this.demande.demandeMarchandDgName,
        demandeMarchandTypeActivite: this.demande.demandeMarchandTypeActivite,
        demandeMarchandHost: this.demande.demandeMarchandHost,
        demandeMarchandEmail: this.demande.demandeMarchandEmail,
        demandeMarchandPhone: this.demande.demandeMarchandPhone,
        demandeMarchandAnneeActivite: this.demande.demandeMarchandAnneeActivite,
        demandeMarchandDescription: this.demande.demandeMarchandDescription
      };
    }
  }

  isAcceptedEdit = false;
  onSubmit(form: NgForm, isAcceptedEdit: boolean) {
    const updatedDemande = { ...this.editFormData };
    console.log(updatedDemande)
    if (isAcceptedEdit) {
      // If "Edit & Accept" button is clicked
      this.updateDemandeUpdateAndAccepted(this.demande.demandeId, updatedDemande)
    } else {
      // If "Edit" button is clicked
      this.demandeService.updateDemandeUpdate(this.demande.demandeId, updatedDemande)
        .subscribe(
          (response) => {
            this.toggleEdit();
            console.log('Demande updated:', response);
            location.reload();
          },
          (error) => {
            console.error('Error updating demande:', error);
          }
        );
    }
  }


  ////  Update image 
  updateLogoUrl(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.editFormData.demandeMarchandLogoUrl = inputElement.value;
    }
  }

  isValidImageUrl(url: string): boolean {
    const pattern = /\.(jpg|jpeg|png|gif|svg)$/;
    return pattern.test(url);
  }
}



// import { DemandeService } from './../../../services/demande.service';
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
// import { Demandedto, Status } from 'src/app/commercial/model/demandedto.model';
// import { ModalModule } from 'src/app/shared/components/modal/modal.module';
// import { AneeActivite, Formejuridique } from 'src/app/public/model/demandedto.model';
// import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-demande',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ModalModule,
//     FormsModule
//   ],
//   templateUrl: './demande.component.html',
//   styleUrls: ['./demande.component.css']
// })
// export class DemandeComponent implements OnInit {
//   demandeId!: number;
//   thisDemande!: Demandedto;

//   constructor(
//     private demandeService: DemandeService,
//     private route: ActivatedRoute,
//     private fb: FormBuilder
//   ) {  }

//   ngOnInit(): void {
//     // Retrieve the demandeId from the route parameters
//     this.route.params.subscribe(params => {
//       this.demandeId = params['demandeId'];
//       this.getDemande(this.demandeId);
//     });
//   }

//   getDemande(demandeId: number) {
//     this.demandeService.getDemande(demandeId).subscribe(
//       (data) => {
//         this.thisDemande = data; // Assign directly to thisDemande
//       },
//       (error) => {
//         console.error('Error fetching demande:', error);
//       }
//     );
//   }

//   // updateDemandeRejected

//   loading: boolean = false;

//   startReject(demandeId: number) {
//     this.loading = true;
//     this.updateDemandeRejected(demandeId);
//   }

//   updateDemandeRejected(demandeId: number) {
//     this.demandeService.updateDemandeRejected(demandeId).subscribe(
//       (data) => {
//         console.log('Demande rejected successfully:', data);
//         window.location.href = '/commercial/validation';
//       },
//       (error) => {
//         console.error('Error rejecting demande:', error);
//       },
//       () => {
//         this.loading = false; // Ensure loading is reset after the request completes
//       }
//     );
//   }

//   updateDemandeAccepted(demandeId: number) {
//     this.demandeService.updateDemandeAccepted(demandeId).subscribe(
//       (data) => {
//         console.log('Demande accepted successfully:', data);
//         window.location.href = '/commercial/validation';
//         // Call any additional functions or handle the response as needed
//       },
//       (error) => {
//         console.error('Error accepting demande:', error);
//       }
//     );
//   }



//   get demande() {
//     return this.thisDemande || {};
//   }
  
// ////////////////////

//   modalOpen: boolean = false;
//   rejectOpen: boolean = false;
//   editModalOpen: boolean = false;

//   toggleAccept() {
//       this.modalOpen = !this.modalOpen;
//   }
//   toggleReject() {
//     this.rejectOpen = !this.rejectOpen;
//   }

//   selectedOption: string = '';

//   handleChange(event: any) {
//     this.selectedOption = event.target.value;
//   }

//   ///// Edit

//   editFormData: any = {
//     demandeMarchandName: '',
//     demandeMarchandLogoUrl: '',
//     demandeMarchandFormejuridique: '',
//     demandeMarchandRcIf: '',
//     demandeMarchandSiegeAddresse: '',
//     demandeMarchandDgName: '',
//     demandeMarchandTypeActivite: '',
//     demandeMarchandHost: '',
//     demandeMarchandEmail: '',
//     demandeMarchandPhone: '',
//     demandeMarchandAnneeActivite: '',
//     demandeMarchandDescription: ''
//   };

//   toggleEdit() {
//     this.editModalOpen = !this.editModalOpen;
//     if (this.editModalOpen) {
//       this.editFormData = {
//         demandeId: this.demande.demandeId,
//         demandeMarchandName: this.demande.demandeMarchandName,
//         demandeMarchandLogoUrl: this.demande.demandeMarchandLogoUrl,
//         demandeMarchandFormejuridique: this.demande.demandeMarchandFormejuridique,
//         demandeMarchandRcIf: this.demande.demandeMarchandRcIf,
//         demandeMarchandSiegeAddresse: this.demande.demandeMarchandSiegeAddresse,
//         demandeMarchandDgName: this.demande.demandeMarchandDgName,
//         demandeMarchandTypeActivite: this.demande.demandeMarchandTypeActivite,
//         demandeMarchandHost: this.demande.demandeMarchandHost,
//         demandeMarchandEmail: this.demande.demandeMarchandEmail,
//         demandeMarchandPhone: this.demande.demandeMarchandPhone,
//         demandeMarchandAnneeActivite: this.demande.demandeMarchandAnneeActivite,
//         demandeMarchandDescription: this.demande.demandeMarchandDescription
//       };
//     }
//   }

//   isAcceptedEdit = false;
//   onSubmit(form: NgForm, isAcceptedEdit: boolean) {
//     const updatedDemande = { ...this.editFormData };
//     console.log(updatedDemande)
//     if (isAcceptedEdit) {
//       // If "Edit & Accept" button is clicked
//       this.demandeService.updateDemandeUpdateAndAccepted(this.demande.demandeId, updatedDemande)
//         .subscribe(
//           (response) => {
//             this.toggleEdit();
//             console.log('Demande updated and accepted:', response);
//             location.reload();
//           },
//           (error) => {
//             console.error('Error updating and accepting demande:', error);
//           }
//         );
//     } else {
//       // If "Edit" button is clicked
//       this.demandeService.updateDemandeUpdate(this.demande.demandeId, updatedDemande)
//         .subscribe(
//           (response) => {
//             this.toggleEdit();
//             console.log('Demande updated:', response);
//             location.reload();
//           },
//           (error) => {
//             console.error('Error updating demande:', error);
//           }
//         );
//     }
//   }


//   ////  Update image 
//   updateLogoUrl(event: Event) {
//     const inputElement = event.target as HTMLInputElement;
//     if (inputElement) {
//       this.editFormData.demandeMarchandLogoUrl = inputElement.value;
//     }
//   }

//   isValidImageUrl(url: string): boolean {
//     const pattern = /\.(jpg|jpeg|png|gif|svg)$/;
//     return pattern.test(url);
//   }
// }
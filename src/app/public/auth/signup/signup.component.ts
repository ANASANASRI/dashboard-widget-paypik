import { Component, Input, OnInit } from '@angular/core';
import { DatetimeHelper } from 'src/app/_core/helpers/datetime.helper';
import { CommonService } from 'src/app/_core/services/common.service';
import { pageTransition } from 'src/app/shared/utils/animations';
import { PublicRoutes } from '../../public.routes';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { AdminRoutes } from 'src/app/admin/admin.routes';
import { Images } from 'src/assets/data/images';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DemandeService } from '../../services/demande.service';
import { Demandedto } from '../../model/demandedto.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [pageTransition]
})
export class SignupComponent implements OnInit{
  
  readonly signupbannerImage: string = Images.auth.signup;
  isLoading: boolean = false;
  readonly currentYear: number = DatetimeHelper.currentYear;
  readonly publicRoutes = PublicRoutes;
  form!: FormGroup;
  addDemandeReussie: boolean = false;


  selectedOption: string = '';

  constructor(
    public commonService: CommonService,
    private router: Router,
    private fb: FormBuilder,
    private demandeService: DemandeService
  ) {console.log('Constructor - myForm:', this.form);  }

  ngOnInit(): void {
    this.initializeForm();
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit - myForm:', this.form);
  }

  handleChange(event: any) {
    this.selectedOption = event.target.value;
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['',Validators.required],
      c_logo: ['',Validators.required],
      juridique: ['',Validators.required],
      c_capital: ['',Validators.required],
      c_address: ['',Validators.required],
      c_dg: ['',Validators.required],
      c_field: ['',Validators.required],
      c_web: ['',Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@gmail\\.com')]],
      telephone: ['', [Validators.required, Validators.pattern('\\+?\\d[\\d\\+\\s()-]*')]],
      c_fieldyears: ['',Validators.required],
      c_products: ['',Validators.required]
    });
  }
  
  submitMarchandForm(): void {
    if (this.form.valid) {
      const demandeData: Demandedto = {
        demandeId: 0,
        demandeMarchandName: this.form.get('username')?.value,
        demandeMarchandLogoUrl: this.form.get('c_logo')?.value,
        demandeMarchandDescription: this.form.get('c_products')?.value,
        demandeMarchandPhone: this.form.get('telephone')?.value,
        demandeMarchandHost: this.form.get('c_web')?.value,
        demandeMarchandEmail: this.form.get('email')?.value,
        demandeMarchandTypeActivite: this.form.get('c_field')?.value,
        demandeMarchandRcIf: this.form.get('c_capital')?.value,
        demandeMarchandSiegeAddresse: this.form.get('c_address')?.value,
        demandeMarchandDgName: this.form.get('c_dg')?.value,
        demandeMarchandFormejuridique: this.form.get('juridique')?.value,
        demandeMarchandAnneeActivite: this.form.get('c_fieldyears')?.value,
        demandeIsAccepted: false,
        demandeIsVerified: false
      };
  
      this.isLoading = true;
      console.log("data entrer ", demandeData);
  
      this.demandeService.saveNewDemande(demandeData).subscribe(
        (saveDemande: any) => {
          console.log('Demande enregistrée avec succès:', saveDemande);
          this.isLoading = false;
          this.form.reset();

          this.addDemandeReussie = true;
          setTimeout(() => {
            this.addDemandeReussie = false;
          }, 3000); 
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement de la demande:', error);
          this.isLoading = false;
          alert(`Erreur lors de l'enregistrement de la demande: ${error.message}`);
        }
      );
    } else {
      console.log('Le formulaire est invalide. Assurez-vous que tous les champs sont remplis correctement.');
      this.form.markAllAsTouched();
    }
  }
  
    /*
    this.isLoading = true;
    console.log('data entrer', demandeData);
    this.demandeService.saveDemande(demandeData).subscribe(
      (response) => {
        console.log('Demande enregistrée avec succès:', response);
        this.isLoading = false;
        this.router.navigate([AppRoutes.Admin, AdminRoutes.Dashboard]);
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement de la demande:', error);
        this.isLoading = false;
      }
    );
  } else {
    console.log('Le formulaire est invalide. Assurez-vous que tous les champs sont remplis correctement.');
    this.form.markAllAsTouched();
  }
}*/
  clearForm(): void {
    this.form.reset(); // This will reset all form controls to their initial state
  }


  /// Update logo 
  previewImageUrl: string = '';

  updatePreviewImageUrl(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.previewImageUrl = inputElement.value;
    }
  }


}
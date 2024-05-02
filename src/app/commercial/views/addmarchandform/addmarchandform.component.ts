import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Marchand } from '../../model/marchand.model';
import { MarchandService } from '../../services/marchand.service';

@Component({
  selector: 'app-addmarchandform',
  templateUrl: './addmarchandform.component.html',
  styleUrl: './addmarchandform.component.css'
})
export class AddmarchandformComponent implements OnInit{

  constructor(        
    private marchandService: MarchandService,
    private fb: FormBuilder) {
    console.log('Constructor - myForm:', this.myForm);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - myForm:', this.myForm);
  }



  //////////////photo 
  uploadOption: boolean = true;
  imageUrl: string = '';

  @ViewChild('fileInput') fileInput: any;

  toggleOption() {
    this.uploadOption = !this.uploadOption;
    this.imageUrl = ''; // Clear image URL when switching options
  }

  openFileInput() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Do something with the selected file
  }

  previewImageUrl: string = 'https://i.ibb.co/16Kjq1h/sondage-icons-4.png';

  loadFile(event: any) {
    const input = event.target;
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.previewImageUrl = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  /////////////////////

    myForm!: FormGroup;
  
  
    ngOnInit(): void {
      this.initializeForm();
    }
  
    initializeForm(): void {
      this.myForm = this.fb.group({
        username: [''],
        about: [''],
        rc: [''],
        addressesiege: [''],
        email: [''],
        telephone: [''],
        dgName: [''],
        webHost: [''],
        activite: [''],
        anneeActivite: [''],
        legalFormValue: [''],
        url: ['']
      });
    }
  
  

    submitForm(): void {
      this.myForm.markAllAsTouched();
      
      if (this.myForm.valid) {
        const marchandData: Marchand = {
          marchandId: 0, 
          marchandName: this.myForm.get('username')?.value,
          marchandDescription: this.myForm.get('about')?.value,
          marchandRcIf: this.myForm.get('rc')?.value,
          marchandSiegeAddresse: this.myForm.get('addressesiege')?.value,
          marchandEmail: this.myForm.get('email')?.value,
          marchandPhone: this.myForm.get('telephone')?.value,
          marchandDgName: this.myForm.get('dgName')?.value,
          marchandHost: this.myForm.get('webHost')?.value,
          marchandTypeActivite: this.myForm.get('activite')?.value,
          marchandAnneeActivite: this.myForm.get('anneeActivite')?.value,
          marchandFormejuridique: this.myForm.get('legalFormValue')?.value,
          marchandLogoUrl: this.myForm.get('url')?.value,
          marchandStatus: 'JustCreated', // You may set the initial status here
          callback: 'string', // Assuming these values are set elsewhere
          serviceId: 'string', // Assuming these values are set elsewhere
          accessKey: 'string', // Assuming these values are set elsewhere
          secretKey: 'string' // Assuming these values are set elsewhere
        };
  
        // Call the service method to save the merchant
        this.marchandService.saveMarchand(marchandData).subscribe(
          (savedMarchand: Marchand) => {
            console.log('Merchant saved successfully:', savedMarchand);
            // Optionally, perform any additional actions after saving
            this.myForm.reset();
          },
          (error) => {
            console.error('Error occurred while saving merchant:', error);
            // Handle error if needed
          }
        );
  
      } else {
        // Handle form validation errors if needed
      }
    }
    //////////////////// clear form

    clearForm(): void {
      this.myForm.reset(); // This will reset all form controls to their initial state
    }

    ///////////////// save the marchand


  
}

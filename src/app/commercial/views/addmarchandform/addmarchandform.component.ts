import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmarchandform',
  templateUrl: './addmarchandform.component.html',
  styleUrl: './addmarchandform.component.css'
})
export class AddmarchandformComponent {

  constructor(private formBuilder: FormBuilder) {
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

  /////////// cancel form


  ///////////////// error 

  myForm!: FormGroup;


    ngOnInit(): void {
        this.myForm = this.formBuilder.group({
            username: ['', Validators.required],
            // Define other form controls here with their validators
        });
    }

    submitForm(): void {
        if (this.myForm.valid) {
            // Handle form submission here
        }
    }

    cancelForm(): void {
        // Handle cancel action here
        console.log('cancelForm called');
        if (this.myForm) {
          console.log('Resetting form');
          
        } else {
          console.log('myForm is undefined');
        }
    }
}

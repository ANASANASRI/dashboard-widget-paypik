import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addmarchandform',
  templateUrl: './addmarchandform.component.html',
  styleUrl: './addmarchandform.component.css'
})
export class AddmarchandformComponent {





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
  @ViewChild('myForm') myForm!: NgForm;

  constructor() {
    console.log('Constructor - myForm:', this.myForm);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - myForm:', this.myForm);
  }

  cancelForm() {
    console.log('cancelForm called');
    if (this.myForm) {
      console.log('Resetting form');
      this.myForm.resetForm();
    } else {
      console.log('myForm is undefined');
    }
  }

  ///////////////// error 

  
}

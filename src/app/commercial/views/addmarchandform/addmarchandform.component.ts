import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addmarchandform',
  templateUrl: './addmarchandform.component.html',
  styleUrl: './addmarchandform.component.css'
})
export class AddmarchandformComponent {



  previewImageUrl: string = 'https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c';

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

}

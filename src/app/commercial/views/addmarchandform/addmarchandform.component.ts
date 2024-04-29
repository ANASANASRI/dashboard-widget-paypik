import { Component, ViewChild } from '@angular/core';

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

}

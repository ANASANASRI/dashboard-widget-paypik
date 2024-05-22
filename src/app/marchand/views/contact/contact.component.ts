import { CommonModule } from '@angular/common';
import { EmailserviceService } from './../../services/emailservice.service';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private emailserviceService: EmailserviceService) {
    this.contactForm = this.formBuilder.group({
      subject: ['', Validators.required],
      nom: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { subject, nom, message } = this.contactForm.value;
      this.emailserviceService.sendEmail(subject, nom, message)
        .subscribe(
          response => {
            // Handle success response (e.g., show success message)
            console.log('Email sent successfully:', response);
            this.contactForm.reset();
          },
          error => {
            // Handle error response (e.g., show error message)
            console.error('Failed to send email:', error);
          }
        );
    } else {
      // Form is invalid, do something (e.g., show error message)
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/public/auth/auth.service';
import { pageTransition } from 'src/app/shared/utils/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [pageTransition]
})
export class ProfileComponent implements OnInit {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  userId!: number;
  marchandId!: number;
  showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute  // Inject ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.marchandId = +params['id'];  // Retrieve the marchandId from the URL
      this.fetchUserId();  // Fetch the userId based on the marchandId
    });
  }

  fetchUserId(): void {
    this.authService.getUserByMarchandId(this.marchandId).subscribe(
      userId => {
        this.userId = userId;  // Set the userId from the response
      },
      error => {
        console.error(error);
        alert('An error occurred while fetching the user ID.');
      }
    );
  }

  onSubmit(form: NgForm): void {
    if (this.newPassword !== this.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    this.authService.updatePassword(this.userId, this.currentPassword, this.newPassword).subscribe(
      response => {
        console.log(response);
        alert(response.message);
        form.reset();
      },
      error => {
        console.error(error);
        alert('An error occurred while updating the password.');
      }
    );
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}

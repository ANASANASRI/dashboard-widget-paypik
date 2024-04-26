import { Component } from '@angular/core';
import { DatetimeHelper } from 'src/app/_core/helpers/datetime.helper';
import { CommonService } from 'src/app/_core/services/common.service';
import { pageTransition } from 'src/app/shared/utils/animations';
import { PublicRoutes } from '../../public.routes';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { AdminRoutes } from 'src/app/admin/admin.routes';
import { Images } from 'src/assets/data/images';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [pageTransition]
})
export class SignupComponent {
  
  readonly signupbannerImage:string = Images.auth.signup
  isLoading: boolean = false;
  readonly currentYear: number = DatetimeHelper.currentYear;
  readonly publicRoutes = PublicRoutes;

  constructor(
    public commonService: CommonService,
    private router: Router
  ) { }




  //////////////////
  //select input color text

  selectedOption: string = '';

  handleChange(event: any) {
    this.selectedOption = event.target.value;
  }

  selectedOption1: string = '';

  handleChange1(event: any) {
    this.selectedOption1 = event.target.value;
  }

  ///////////////////// 
  //Submit form


  submitMarchandForm(form: NgForm) {
    if (form.valid) {
      // Check if any input value is empty
      let hasEmptyFields = false;
      Object.keys(form.controls).forEach(key => {
        if (!form.controls[key].value) {
          form.controls[key].markAsTouched(); // Mark the field as touched to trigger validation styles
          hasEmptyFields = true;
          console.log('Empty field detected:', key);
        }
      });
  
      if (hasEmptyFields) {
        console.log('Some fields are empty.');
        return; // Exit the function if there are empty fields
      }
  
      // Handle form submission here, e.g., sending data to a server
      // this.isLoading = true;
  
      // setTimeout(() => {
      //   this.isLoading = false;
      //   this.router.navigate([AppRoutes.Admin, AdminRoutes.Dashboard]);
      // }, 3000);
  
      console.log('Form submitted successfully!', form.value);
    } else {
      console.log('Form is invalid.');
      // Log form errors for debugging
      console.log('Form errors:', form.errors);
    }
  }
  
  

}

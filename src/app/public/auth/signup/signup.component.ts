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


  ///////////////////// 
  //Submit form


  submitMarchandForm(form: NgForm) {
    if (form.valid) {
      // Handle form submission here, e.g., sending data to a server
      // this.isLoading = true;

      // setTimeout(() => {
      //   this.isLoading = false;
      //   this.router.navigate([AppRoutes.Admin, AdminRoutes.Dashboard]);
      // }, 3000);

      console.log('Form submitted successfully!', form.value);
    } else {
      // Handle invalid form
      console.log('Form is invalid.');
    }
  }

}

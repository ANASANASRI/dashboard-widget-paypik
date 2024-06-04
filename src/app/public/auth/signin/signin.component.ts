import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatetimeHelper } from 'src/app/_core/helpers/datetime.helper';
import { CommonService } from 'src/app/_core/services/common.service';
import { AdminRoutes } from 'src/app/admin/admin.routes';
import { pageTransition } from 'src/app/shared/utils/animations';
import { Images } from 'src/assets/data/images';
import { AlertType } from '../../../shared/components/alert/alert.type';
import { PublicRoutes } from '../../public.routes';
import { TokenService } from '../token.service';
import { AuthService } from '../auth.service';
import { Signin } from './signin.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [pageTransition],
})
export class SigninComponent {
  readonly signinBannerImage: string = Images.bannerLogo;
  marchandId!: number;
  isLoading: boolean = false;
  readonly publicRoutes = PublicRoutes;
  readonly currentYear: number = DatetimeHelper.currentYear;

  serverErrors: string[] = [];

  signInForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  constructor(
    public commonService: CommonService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Récupérer les paramètres de la route
    this.route.params.subscribe(params => {
      this.marchandId = +params['id'];
    });
  }

  protected readonly AlertType = AlertType;

  onAlertCloseHandler(event: any): void {
    // Réinitialiser les erreurs du serveur lors de la fermeture de l'alerte
    this.serverErrors = [];
  }

  onSubmit(): void {
    //console.log(this.signInForm.value);
  
    const username = this.signInForm.value.username;
    const password = this.signInForm.value.password;
  
    if (username && password) {
      const signinData: Signin = { username, password };
  
      this.authService.signin(signinData).subscribe(
        (data) => {
          //console.log('Access Token:', data.accessToken);
          //console.log('User Roles:', data.roles);
          this.tokenService.saveToken(data.accessToken);
          

          if(data.roles.includes('ROLE_ADMIN')) {
            this.redirectBasedOnRole(data.roles);

          }else if (data.roles.includes('ROLE_COMMERCIAL')) {
            this.redirectBasedOnRole(data.roles);

          } else if (data.roles.includes('ROLE_MARCHAND')) {
            // Si l'utilisateur est marchand, appeler findMarchandIdByMarchandName avant de rediriger
            this.authService.findMarchandIdByMarchandName(username).subscribe(
              (marchandId) => {
                this.marchandId = marchandId;
                //console.log('Marchand ID:', marchandId);
                this.router.navigate(['/marchand/dashboard/' + this.marchandId]);
              },
              (error) => {
                console.error('Error fetching marchand ID:', error);
                // Gérer les erreurs ici...
                alert('An error occurred while fetching the marchand ID. Please try again.');
              }
            );
          } else {
            // Pour les autres rôles, rediriger en fonction du rôle
            this.redirectBasedOnRole(data.roles);
          }
        },
        (err) => {
          console.log('Login Error:', err);
          if (err.status === 401) {
            alert('Email or password is incorrect.');
          } else {
            alert('An error occurred during login. Please try again.');
          }
        }
      );
    } else {
      alert('Please enter both username and password.');
      console.log('Username or password is not defined');
    }
  }


  
  // Fonction pour rediriger l'utilisateur en fonction de son rôle
  private redirectBasedOnRole(roles: string[]): void {
    if (roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/admin/dashboard']);
    
    } else if (roles.includes('ROLE_COMMERCIAL') ) {
      this.router.navigate(['/commercial/validation']);
      
    } else {
      this.router.navigate(['/signin']);
    }
  }

  /// Forget password
  modalOpen: boolean = false;
  togglePassForget() {
      this.modalOpen = !this.modalOpen;
  }


  // Aficher le mot de passe
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  togglePasswordVisibility() {
    const passwordInputEl = this.passwordInput.nativeElement;
    if (passwordInputEl.type === 'password') {
      passwordInputEl.type = 'text';
    } else {
      passwordInputEl.type = 'password';
    }
  }


}

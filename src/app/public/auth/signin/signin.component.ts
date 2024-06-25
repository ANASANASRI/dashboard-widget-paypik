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
  loginError: boolean = false;
  isEmpty: boolean = false;
  loginMarchandError: boolean = false;

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
  
    const username = this.signInForm.value.username;
    const password = this.signInForm.value.password;
  
    this.isLoading = true;

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
                this.router.navigate(['/marchand/dashboard/' + this.marchandId]);
              },
              (error) => {
                this.loginMarchandError = true;
                setTimeout(() => {
                  this.loginMarchandError = false;
                }, 6000); 
                console.error('Error fetching marchand ID:', error);
              }
            );
          } else {
            // Pour les autres rôles, rediriger en fonction du rôle
            this.redirectBasedOnRole(data.roles);
            this.isLoading = false;
          }
        },
        (err) => {
          this.isLoading = false;
          this.loginError = true;
          setTimeout(() => {
            this.loginError = false;
          }, 6000); 
        }
      );
    } else {
      this.isLoading = false;
      this.isEmpty = true;
      setTimeout(() => {
        this.isEmpty = false;
      }, 6000); 
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

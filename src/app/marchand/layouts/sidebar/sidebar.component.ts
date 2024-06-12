import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/_core/services/common.service';
import { AppRoutes } from 'src/app/app.routes';
import { MarchandRoutes, SettingRoutes ,SupportRoutes } from '../../marchand.routes';
import { TokenService } from 'src/app/public/auth/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  sidebarIsCollapsed: boolean = true;
  readonly appRoutes = AppRoutes;
  readonly marchandRoutes = MarchandRoutes;
  readonly settingRoutes = SettingRoutes;
  readonly supportRoutes = SupportRoutes;
  private routerSubscription: Subscription = new Subscription();

  @Output() sidebarCollapsed = new EventEmitter<boolean>();

  constructor(
    public readonly commonServices: CommonService,
    private readonly elementRef: ElementRef,
    private readonly tokenService: TokenService,
    private readonly route: ActivatedRoute, // Use readonly for consistency
    private readonly router: Router // Use readonly for consistency
  ) { }

  marchandId!: number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const rawId = params['id'];
      console.log("Raw ID from params:", rawId); // Check if rawId is correctly retrieved
      this.marchandId = +rawId;
      console.log("Parsed ID:", this.marchandId); // Check if marchandId is correctly parsed
    });
  }

  
  // marchandId!: number;
  // Id!: number; // ID de l'utilisateur
  // user: User | null = null; // Utilisateur authentifié

  // ngOnInit(): void {
  //   // Récupérer l'ID de l'utilisateur authentifié lors de l'initialisation du composant
  //   this.Id = this.authService.getAuthenticatedUserId();
  //   console.log("ID de l'utilisateur authentifié:", this.Id);
  //   if (this.Id !== 0) { // Vérifier si l'ID de l'utilisateur est valide
  //     this.retrieveUserById(); // Appel à la méthode pour récupérer les données de l'utilisateur
  //   } else {
  //     console.error('ID d\'utilisateur invalide:', this.Id);
  //   }
  // }

  // retrieveUserById(): void {
  //   // Appel au service pour récupérer les données de l'utilisateur en utilisant son ID
  //   this.authService.getUserById(this.Id).subscribe({
  //     next: (data: User) => {
  //       //console.log('Données de l\'utilisateur:', data);
  //       this.user = data;
  //     },
  //     error: (error) => console.error('Erreur lors de la récupération de l\'utilisateur:', error),
  //   });
  // }
  
  getMarchandI(){
    return this.marchandId;
  }
  ngAfterViewInit(): void {
    this.subMenuToggleHandlerOnRouteChange();
    setTimeout(() => {
      this.subMenuToggleHandlerOnPageReload();
    }, 1);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  subMenuToggleHandler = (event: MouseEvent): void => {
    const elem = event.target as HTMLElement;
    const subMenu = elem.closest("a.sub-menu") as Element;

    if (subMenu.getAttribute('aria-expanded') === 'false')
      subMenu.setAttribute('aria-expanded', 'true');
    else
      subMenu.setAttribute('aria-expanded', 'false');
  }

  subMenuToggleHandlerOnPageReload = (): void => {
    const elem = this.elementRef.nativeElement.querySelector('[aria-current="page"]');
    if (elem) {
      const closestUl = elem.closest('ul.sub-menu-item');
      if (closestUl) {
        const subMenu = closestUl.previousElementSibling;
        if (subMenu) {
          subMenu.setAttribute('aria-expanded', 'true');
        }
      }
    }
  };

  subMenuToggleHandlerOnRouteChange = (): void => {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const subMenu = this.elementRef.nativeElement.querySelectorAll(".sub-menu");
        const elem = this.elementRef.nativeElement.querySelector(`[href='${event.url}']`) as Element;

        if (elem && elem.closest('ul.sub-menu-item')) return;

        subMenu.forEach((subMenu: Element) => {
          if (subMenu.getAttribute('aria-expanded') === 'true')
            subMenu.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  // Method to handle logout
  onLogout(): void {
    this.tokenService.logOut();
  }
}
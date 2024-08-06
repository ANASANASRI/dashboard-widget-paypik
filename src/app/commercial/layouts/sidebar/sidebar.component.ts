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
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/_core/services/common.service';
import { AppRoutes } from 'src/app/app.routes';
import { CommercialRoutes, ElementRoutes, SettingRoutes } from '../../commercial.routes';
import { Demandedto } from '../../model/demandedto.model';
import { DemandeService } from '../../services/demande.service';
import { TokenService } from 'src/app/public/auth/token.service';
import { AuthService } from 'src/app/public/auth/auth.service'; // Import AuthService

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  sidebarIsCollapsed: boolean = true;
  readonly appRoutes = AppRoutes;
  readonly commercialRoutes = CommercialRoutes;
  readonly settingRoutes = SettingRoutes;
  readonly elementRoutes = ElementRoutes;
  private routerSubscription: Subscription = new Subscription();
  
  @Output() sidebarCollapsed = new EventEmitter<boolean>();

  isCommercialOnly: boolean = false; // Track if the user has only ROLE_COMMERCIAL

  constructor(
    public readonly commonServices: CommonService,
    private readonly elementRef: ElementRef,
    private demandeService: DemandeService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService // Inject AuthService
  ) { }

  ngOnInit(): void {
    this.checkIfUserIsOnlyCommercial();
    
    if (this.isCommercialOnly) {
      this.getAllDemandesNotVerified();
      this.pollDemandes(); // Start polling for updates
    }
  }

  checkIfUserIsOnlyCommercial(): void {
    const roles = this.authService.getUserRoles();
    this.isCommercialOnly = roles.length === 1 && roles[0] === 'ROLE_COMMERCIAL';
    console.log('isCommercialOnly:', this.isCommercialOnly);
  }

  pollDemandes() {
    setInterval(() => {
      if (this.isCommercialOnly) {
        this.getAllDemandesNotVerified();
      }
    }, 5000); // Poll every 5 seconds (adjust as needed)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.subMenuToggleHandlerOnPageReload();
    }, 100); // Adjust the delay as needed
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  subMenuToggleHandler = (event: MouseEvent): void => {
    const elem = event.target as HTMLElement;
    const subMenu = elem.closest("a.sub-menu") as Element;

    if (subMenu.getAttribute('aria-expanded') == 'false')
      subMenu.setAttribute('aria-expanded', 'true');
    else
      subMenu.setAttribute('aria-expanded', 'false');
  }

  subMenuToggleHandlerOnPageReload = (): void => {
    const elem = this.elementRef.nativeElement.querySelector('[aria-current="page"]')
      .closest('ul.sub-menu-item') as Element;

    const subMenu = elem?.previousSibling as Element;

    subMenu?.setAttribute('aria-expanded', 'true');
  }

  subMenuToggleHandlerOnRouteChange = (): void => {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const subMenu = this.elementRef.nativeElement.querySelectorAll(".sub-menu");
        const elem = this.elementRef.nativeElement.querySelector(`[href='${event.url}']`) as Element;

        if (elem.closest('ul.sub-menu-item')) return;

        subMenu.forEach((subMenu: Element) => {
          if (subMenu.getAttribute('aria-expanded') == 'true')
            subMenu.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  /////////////////////////////////////////get demandes  (notification)
  unverifiedDemandes: Demandedto[] = [];
  demandLength!: number;

  getAllDemandesNotVerified() {
    this.demandeService.getAllDemandesNotVerified().subscribe(
      (data) => {
        this.unverifiedDemandes = data;
        this.demandLength = this.unverifiedDemandes.length;
      },
      (error) => {
        console.error('Error fetching unverified demandes:', error);
      }
    );
  }

  get demandelenght() {
    return this.unverifiedDemandes.length;
  }

  // Method to handle logout
  onLogout(): void {
    this.tokenService.logOut();
  }
}

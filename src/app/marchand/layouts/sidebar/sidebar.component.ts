import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/_core/services/common.service';
import { AppRoutes } from 'src/app/app.routes';
import { MarchandRoutes, SettingRoutes, SupportRoutes } from '../../marchand.routes';
import { TokenService } from 'src/app/public/auth/token.service';
import { AuthService } from 'src/app/public/auth/auth.service';

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
    private authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {    
    this.userId = this.authService.getAuthenticatedUserId();
    console.log('User ID:', this.userId);
  }

  userId: number;
  marchandId: number | null = null;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const rawId = params['id'];
      console.log("Raw ID from params:", rawId);
      if (rawId) {
        this.marchandId = +rawId;
        console.log("Parsed ID:", this.marchandId);
      } else {
        console.warn("No Marchand ID found in route parameters.");
      }
    });
  
    this.userId = this.authService.getAuthenticatedUserId();
    console.log("ID de l'utilisateur authentifié:", this.userId);
  
    if (this.userId) {
      this.getMarchandIdByUserId();
    } else {
      console.error("Invalid user ID");
    }
  }

  getMarchandIdByUserId(): void {
    if (this.userId > 0) {
      this.authService.findMarchandIdByUserId(this.userId).subscribe(
        (marchandId: number) => {
          console.log('API Response:', marchandId); // Log the response to check if it's valid
          this.marchandId = marchandId;
          console.log('Marchand ID:', this.marchandId);
        },
        (error) => {
          this.errorMessage = 'Error fetching Marchand ID';
          console.error(this.errorMessage, error);
        }
      );
    } else {
      this.errorMessage = 'Invalid user ID';
    }
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

  onLogout(): void {
    this.tokenService.logOut();
  }
}

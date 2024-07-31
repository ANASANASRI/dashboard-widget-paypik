import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SuperadminGuard } from './superadmin.guard'; // Import SuperadminGuard

@Injectable({
  providedIn: 'root'
})
export class CommercialGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private superadminGuard: SuperadminGuard
  ) {}

  canActivate(): boolean {
    // Check if the user has commercial access or is a superadmin
    if (this.authService.isCommercial() || this.superadminGuard.canActivate()) {
      return true;
    }

    // Redirect to the sign-in page if neither condition is met
    this.router.navigate(['/unauthorized']);
    return false;
  }
}


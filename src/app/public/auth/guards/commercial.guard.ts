import { SuperadminGuard } from './superadmin.guard';
import { AdminGuard } from './admin.guard';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommercialGuard implements CanActivate {

  
  constructor(private authService: AuthService, private router: Router, private SuperadminGuard: SuperadminGuard) {}

  canActivate(): boolean {
    // Check if the user is an super admin first
    if (this.SuperadminGuard.canActivate()) {
      return true;
    }

    // Then check if the user has commercial access
    if (this.authService.isCommercial()) {
      return true;
    }

    // Redirect if neither condition is met
    this.router.navigate(['/signin']); // Redirect to the sign-in page if the user is not a commercial
    return false;
  }
}

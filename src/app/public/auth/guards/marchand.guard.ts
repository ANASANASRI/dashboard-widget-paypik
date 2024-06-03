import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminGuard } from './admin.guard';
import { SuperadminGuard } from './superadmin.guard';

@Injectable({
  providedIn: 'root'
})
export class MarchandGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private SuperadminGuard: SuperadminGuard) {}

  canActivate(): boolean {
    // Check if the user is an admin first
    if (this.SuperadminGuard.canActivate()) {
      return true;
    }

    // Then check if the user has marchand access
    if (this.authService.isMarchand()) {
      return true;
    }

    // Redirect if neither condition is met
    this.router.navigate(['/signin']); // Redirect to the sign-in page if the user is not a marchand
    return false;
  }
}

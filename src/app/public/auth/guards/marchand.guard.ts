import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminGuard } from './admin.guard';
import { SuperadminGuard } from './superadmin.guard';

@Injectable({
  providedIn: 'root'
})
export class MarchandGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private superadminGuard: SuperadminGuard
  ) {}

  canActivate(): boolean {
    // Check if the user has commercial access or is a superadmin
    if (this.authService.isMarchand() || this.superadminGuard.canActivate()) {
      return true;
    }

    // Redirect if neither condition is met
    this.router.navigate(['/unauthorized']); // Redirect to the sign-in page if the user is not a marchand
    return false;
  }
  
}

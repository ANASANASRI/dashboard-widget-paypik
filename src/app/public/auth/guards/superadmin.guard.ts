import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class SuperadminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isSuperAdmin()) {
      return true;
    } else {
      this.router.navigate(['/signin']); // Redirect to the sign-in page if the user is not a super admin
      return false;
    }
  }
}

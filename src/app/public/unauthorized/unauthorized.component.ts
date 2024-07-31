import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.css'
})
export class UnauthorizedComponent {
  constructor(private router: Router) { }

  goBack(): void {
    // Navigate to the previous page if there is a history entry
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback to a default route if no history entry exists
      this.router.navigate(['/']);
    }
  }
}

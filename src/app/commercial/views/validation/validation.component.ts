import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { pageTransition } from 'src/app/shared/utils/animations';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
  animations: [pageTransition]
})
export class EventsComponent {
  constructor(private router: Router) {}

  loadTest() {
    // Get the current route URL
    const currentRoute = this.router.url;

    // Check if the current route contains the test outlet
    const hasTestOutlet = currentRoute.includes('test');

    // If the current route already contains the test outlet, navigate to the main validation route
    if (hasTestOutlet) {
      this.router.navigate(['commercial', 'validation']);
    } else {
      // Otherwise, navigate to the validation route with the test outlet
      this.router.navigate(['commercial', 'validation', { outlets: { test: ['testing'] } }]);
    }
  }
}

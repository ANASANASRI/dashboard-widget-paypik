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
  constructor(private router: Router) {
  }

  loadTest() {
    this.router.navigate(['admin', 'validation', { outlets: { test: ['testing'] } }]);
  }
}

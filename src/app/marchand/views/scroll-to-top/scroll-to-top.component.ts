import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent {

   // Function to scroll to the top of the page smoothly
  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Listen to the scroll event and toggle button visibility based on scroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const toTopButton = document.getElementById("to-top-button");
    if (toTopButton) {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        toTopButton.classList.remove("hidden");
      } else {
        toTopButton.classList.add("hidden");
      }
    }
  }
}

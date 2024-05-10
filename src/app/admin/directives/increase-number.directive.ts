import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[appIncreaseNumber]',
})
export class IncreaseNumberDirective implements OnInit {
  @Input('appIncreaseNumber') finalValue: number = 0;

  duration: number = 500; // Duration in milliseconds
  interval: number = 20; // Interval in milliseconds
  steps: number = this.duration / this.interval;
  stepValue: number = 0;
  currentValue: number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.stepValue = (this.finalValue - this.currentValue) / this.steps;
    this.animateValue();
  }

  animateValue(): void {
    if (this.currentValue < this.finalValue) {
      setTimeout(() => {
        this.currentValue += this.stepValue;
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'textContent',
          this.currentValue.toFixed(1)
        );
        this.animateValue();
      }, this.interval);
    } else {
      // Ensure the final value is displayed without rounding issues
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'textContent',
        this.finalValue.toFixed(1)
      );
    }
  }
}
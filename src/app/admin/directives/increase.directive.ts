import { Directive, ElementRef, OnInit } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[appIncrease]',
})
export class IncreaseDirective implements OnInit {

  constructor(private elementRef: ElementRef, private animationBuilder: AnimationBuilder) { }

  ngOnInit(): void {
    const animation = this.animationBuilder.build([
      style({ opacity: 0, transform: 'translateY(50px)' }),
      animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ]);

    const player = animation.create(this.elementRef.nativeElement);
    player.play();
  }
}
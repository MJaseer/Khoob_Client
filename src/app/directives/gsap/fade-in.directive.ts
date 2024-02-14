import {Directive, ElementRef, OnInit} from '@angular/core';
import {CoreAnimationDirective} from './core-animation.directive';

@Directive({
  selector: '[appFadeIn]',
  standalone:true
})
export class FadeInDirective extends CoreAnimationDirective implements OnInit {
  constructor(protected override element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    this.animateIn();
  }

  protected override animateIn() {
    this.timeline
    .from(this.element.nativeElement, this.duration, {opacity:'0', ease:"Expo.easeInOut"}, this.delay);
    super.animateIn();
  }
}
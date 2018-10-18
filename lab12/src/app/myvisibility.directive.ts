import { Directive, Input, Component, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit {

  @HostBinding('style.visibility') display;
  @Input() isVisible: boolean;
  
  ngOnInit(): void {
    this.display = this.isVisible ? 'visible' : 'hidden';
  }

}
import { Directive, Input, HostBinding, HostListener, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {

  @HostBinding('style.color') colorStyle;
  @Input() myColor: string;
  @Output() colorChangeEvent: EventEmitter<string>;

  constructor(private e: ElementRef) {
    this.colorChangeEvent = new EventEmitter();
  }

  @HostListener('click') changeColor(): void {
    if(this.colorStyle === this.myColor)
      return;
    
    this.colorStyle = this.myColor;
    this.colorChangeEvent.emit(`An element with content: "${this.e.nativeElement.innerText}" changed its color to ${this.myColor}`);
  }

}
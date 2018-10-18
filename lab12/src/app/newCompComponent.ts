import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newComp',
  template: `
    <ul>
      <li appMyvisibility [isVisible]=true appMynewcolor 
        *ngFor="let item of arrayItems; let i = index"
        (colorChangeEvent)='changeColorHandler($event)' myColor='{{item.color}}' > 
        {{i}} {{item.name}} 
      </li>
    </ul>
    {{currentColor}}
  `,
  styles: []
})
export class newCompComponent implements OnInit {

  @Input('items') arrayItems: Array<string>;
  private currentColor: string;

  constructor() {
    this.arrayItems = [];
  }

  ngOnInit() {
  }

  changeColorHandler(e) {
    this.currentColor = e;
  }
}
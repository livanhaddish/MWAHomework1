import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-newComp [items]="arrayItems"></app-newComp>
  `,
  styles: []
})
export class AppComponent {
  title = 'exercise1';

  private arrayItems: Array<object>;

  constructor() {
    this.arrayItems = [{ name: 'Edwin', color: '#b00404' }, 
    { name: 'livan', color: '#00aaff' }, 
    { name: 'goitom', color: '#04b04a' }, 
    { name: 'haddish', color: '#a704b0' }];
  }

}
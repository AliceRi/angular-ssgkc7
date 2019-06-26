import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: `/hello.component.html`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
   counter = 0;

  private increaseCounter(this) {
    this.counter++;
  }
  public getCounter(){
      return this.counter;
    }

}

import {Directive, Output, EventEmitter, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {

  //Emit output to any parent

  @Output() ModifyProp : EventEmitter<any> = new EventEmitter();

  constructor(private ele : ElementRef) { }
  colors : string[] =['Red','green','blue','orange','yellow']

  @HostListener('click', ['$event.target']) onClick(btn){
    var random =  Math.floor(Math.random()*this.colors.length);
    console.log(random);
    this.ele.nativeElement.style.color = this.colors[random];

    this.ModifyProp.emit(this.colors[random]);
    console.log(this.colors[random]);

  }

}

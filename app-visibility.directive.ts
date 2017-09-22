import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVisibility]'
})
export class AppVisibilityDirective {

  @Input() setvisibility : boolean;
  constructor(private ele:ElementRef) { }

  ngOnInit(){
    if(this.setvisibility == true){
        this.ele.nativeElement.style.display = "block";
    }else{
      this.ele.nativeElement.style.display = "none";
    }

}
}

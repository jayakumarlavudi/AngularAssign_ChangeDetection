import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //styles set
})
export class AppComponent {
  title = 'app';
  myArray : String[]=['Jay','kumar','Chunni','Chonu','bindu'];
  selectedColor = '';
  getColor(){
    console.log(this.selectedColor);
    if(this.selectedColor)
      console.log(this.selectedColor);
  }
}

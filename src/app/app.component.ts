import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'text-app',
  template: `<div>
  <h1>{{Heading}}</h1>
  <my-student></my-student></div>`
  ,
  
})
export class AppComponent  {
 Heading="Student details";
  
}

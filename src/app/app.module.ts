import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ HelloComponent, AppComponent, StudentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

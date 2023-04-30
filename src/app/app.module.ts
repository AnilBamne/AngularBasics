import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { SiblingComponent } from './Components/sibling/sibling.component';
import { FilterPipe } from './Filter/filter.pipe';
import { DemoComponent } from './Components/demo/demo.component';
import { Demo2Component } from './Components/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    FilterPipe,
    DemoComponent,
    Demo2Component
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

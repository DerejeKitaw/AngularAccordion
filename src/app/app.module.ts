import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { AccordionService } from "app/accordion.service";

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccordionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

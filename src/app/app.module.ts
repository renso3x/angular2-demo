import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { HighlightDirective } from './highlight.directive';

import { LogserviceService } from './logservice.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    DatabindingComponent,
    EventbindingComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogserviceService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StreamComponent } from './stream/stream.component';
import { PipeComponent } from './pipe/pipe.component';
import { SimpleComponent } from './simple/simple.component';
import { Simple1Component } from './simple1/simple1.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamComponent,
    PipeComponent,
    SimpleComponent,
    Simple1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

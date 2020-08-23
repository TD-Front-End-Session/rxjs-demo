import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StreamComponent } from './stream/stream.component';
import { PipeComponent } from './pipe/pipe.component';
import { SimpleComponent } from './simple/simple.component';
import { Simple1Component } from './simple1/simple1.component';
import { Stream1Component } from './stream1/stream1.component';
import { Stream2Component } from './stream2/stream2.component';
import { ConcatStreamComponent } from './concat-stream/concat-stream.component';
import { MulticastComponent } from './multicast/multicast.component';
import { Consumer1Component } from './consumer1/consumer1.component';
import { Consumer2Component } from './consumer2/consumer2.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamComponent,
    PipeComponent,
    SimpleComponent,
    Simple1Component,
    Stream1Component,
    Stream2Component,
    ConcatStreamComponent,
    MulticastComponent,
    Consumer1Component,
    Consumer2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

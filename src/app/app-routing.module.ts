import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { Simple1Component } from './simple1/simple1.component';
import { StreamComponent } from './stream/stream.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'simple1', component: Simple1Component },
  { path: 'stream', component: StreamComponent },
  { path: 'pipe', component: PipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

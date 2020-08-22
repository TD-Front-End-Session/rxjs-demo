import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { StreamComponent } from './stream/stream.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'pipe', component: PipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

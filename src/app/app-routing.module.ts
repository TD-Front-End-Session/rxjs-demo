import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { Simple1Component } from './simple1/simple1.component';
import { StreamComponent } from './stream/stream.component';
import { Stream1Component } from './stream1/stream1.component';
import { Stream2Component } from './stream2/stream2.component';
import { ConcatStreamComponent } from './concat-stream/concat-stream.component';
import { MulticastComponent } from './multicast/multicast.component';
import { Consumer1Component } from './consumer1/consumer1.component';
import { Consumer2Component } from './consumer2/consumer2.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'simple1', component: Simple1Component },
  { path: 'stream', component: StreamComponent },
  { path: 'stream1', component: Stream1Component },
  { path: 'stream2', component: Stream2Component },
  { path: 'concat-stream', component: ConcatStreamComponent },
  {
    path: 'multicast',
    component: MulticastComponent,
    children: [
      { path: 'consumer1', component: Consumer1Component },
      { path: 'consumer2', component: Consumer2Component },
      { path: '**', component: Consumer1Component },

    ]
  },

  { path: 'scheduler', component: SchedulerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

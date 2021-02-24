import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    NgDragDropModule.forRoot(),
    DragDropModule,
    MatCardModule
  ]
})
export class TaskModule { }

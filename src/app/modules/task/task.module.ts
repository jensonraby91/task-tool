import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { DndModule } from 'ng2-dnd';
import { MomentModule } from 'ngx-moment';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { MockData } from 'src/app/shared/services/db-data-serviec';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbDatepicker, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TaskListComponent, AddTaskComponent, TaskBoardComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    DndModule.forRoot(),
    MomentModule,
    InMemoryWebApiModule.forRoot(MockData),
    ReactiveFormsModule,
    NgbModule
  ],
  bootstrap: [],
  providers:[NgbActiveModal],
  entryComponents:[]
})
export class TaskModule { }

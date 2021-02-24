import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TaskService } from 'src/app/shared/services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit, OnDestroy {
  tasks: any = [];
  listTeamOne: any = [];
  listTeamTwo: any = [];
  // public unsubscribe$ = new Subject();
  constructor(
    public taskService: TaskService,
    public modalService: NgbModal
  ) { }

  openTask(data: any, type: string, index: number) {
    const contentModalRef = this.modalService.open(AddTaskComponent, { size: 'lg', backdrop: 'static' });
    contentModalRef.componentInstance.isEdit = true;
    contentModalRef.componentInstance.data = data;
    contentModalRef.result.then(res => {
      if (res.status == 'done') {
        if (type == 'ToDo') {
          this.tasks.splice(index, 1);
        } else if (type == 'Inprogress') {
          this.listTeamOne.splice(index, 1);
        }
        this.listTeamTwo.push(res)
      } else if (type == 'ToDo') {
        this.tasks[index] = res;
      } else if (type == 'Inprogress') {
        this.listTeamOne[index] = res;
      } else if (type == 'Completed') {
        this.listTeamTwo[index] = res;
      }
    }, (err) => {
      console.log(err)
    });
  }

  getEnabledStatus(data) {
    let result = this.taskService.dateDiffInDays(new Date(data.startDate), new Date(data.dueDate));
    if (result > 0)
      return true;
    else
      return false
  }

  getAllTasks() {
    this.taskService.getTask().subscribe(res => {
      this.tasks = res;
    }, err => {
      console.log(err);
    });
  }

  getAllInProgressTask() {
    this.taskService.getInProgress().subscribe(res => {
      this.listTeamOne = res;
    },
      err => {
        console.log(err);
      });
  }

  getCompletedTask() {
    this.taskService.getComplted().subscribe(res => {
      this.listTeamTwo = res;
    },
      err => {
        console.log(err);
      });
  }

  addTo($event: any, item, data) {
    console.log(this.tasks);
  }

  // getNewTask() {
  //   this.taskService.newTask$.pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
  //     this.tasks.push(res);
  //   });
  // }


  openAddTask() {
    const contentModalRef = this.modalService.open(AddTaskComponent, { size: 'lg', backdrop: 'static' });
    contentModalRef.result.then(res => {
      this.tasks.push(res);
    }, (err) => {
      console.log(err)
    });
  }


  ngOnInit(): void {
    this.getAllTasks();
    this.getAllInProgressTask();
    this.getCompletedTask();
    // this.getNewTask();
  }

  ngOnDestroy() {
    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
  }

}

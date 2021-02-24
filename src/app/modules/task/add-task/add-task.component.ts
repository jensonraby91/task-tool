import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Input('data') data;
  @Input('isEdit') isEdit: Boolean;
  addTaskForm: FormGroup;
  currentDate: any;
  remaningDays: any;

  seviorityType: any = [
    { name: 'High', value: 'high' },
    { name: 'Medium', value: 'medium' },
    { name: 'Low', value: 'low' },
  ]

  constructor(
    public activeModal: NgbActiveModal,
    public taskService: TaskService,
    private fb: FormBuilder
  ) { }

  getAddTaskForm() {
    this.addTaskForm = this.fb.group({
      title: ['', Validators.required],
      seviority: ['', Validators.required],
      dueDate: [{ value: '', disabled: this.isEdit }, Validators.required],
    });
  }

  addTask(arg?) {
    if (this.addTaskForm.valid) {
      let payload;
      if (this.isEdit) {
        payload = { ...{ id: this.data.id, startDate: this.data.startDate }, ...this.addTaskForm.value };
        payload.dueDate = this.data.dueDate;
        if (arg)
          payload.status = arg;
      } else {
        payload = { ...{ id: Math.random(), startDate: this.currentDate.toUTCString() }, ...this.addTaskForm.value };
        let tempDate = {
          year: this.addTaskForm.value.dueDate.year,
        };
        if (parseInt(this.addTaskForm.value.dueDate['month']) < 10) {
          tempDate['month'] = `0${this.addTaskForm.value.dueDate['month']}`;
        } else {
          tempDate['month'] = this.addTaskForm.value.dueDate['month'];
        }
        if (parseInt(this.addTaskForm.value.dueDate['day']) < 10) {
          tempDate['day'] = `0${this.addTaskForm.value.dueDate['day']}`;
        } else {
          tempDate['day'] = this.addTaskForm.value.dueDate['day'];
        }
        payload.dueDate = new Date(tempDate['year'], tempDate['month'] - 1, tempDate['day'], this.currentDate.getHours(), this.currentDate.getMinutes(), this.currentDate.getSeconds())
      }
      this.activeModal.close(payload);
    }
  }

  assignFormData() {
    let tempDate = new Date(this.data.dueDate);
    let dateObj = {
      year: tempDate.getFullYear(),
      month: tempDate.getMonth() + 1,
      day: tempDate.getDate()
    }
    this.addTaskForm.setValue({
      title: this.data.title,
      seviority: this.data.seviority,
      dueDate: dateObj
    });
  }

  moveToDone() {
    this.addTask('done');
  }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.getAddTaskForm();
    if (this.isEdit) {
      this.assignFormData();
      const date1 = this.currentDate;
      const date2 = new Date(this.data.dueDate);
      this.remaningDays = this.taskService.dateDiffInDays(date1, date2);
    }
  }

}

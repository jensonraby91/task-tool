import { Component, OnInit } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  droppedItems: any = []
  items = [
    { name: "Apple", type: "fruit" },
    { name: "Carrot", type: "vegetable" },
    { name: "Orange", type: "fruit" }];

  tasks: any;
  listTeamOne: any = [];

  list1 = [
    {name: 'Toyota'},
    {name: 'Bugati'},
    {name: 'Suzuki'}
  ];

  list2 = [
    {name: 'Mercedes'},
    {name: 'Honda'},
    {name: 'BMW'}
  ];

  openTask(arg:any){

  }


  onList1Drop(e: DropEvent) {
    this.list1.push(e.dragData);
    this.removeItem(e.dragData, this.list2)
  }

  onList2Drop(e: DropEvent) {
    this.list2.push(e.dragData);
    this.removeItem(e.dragData, this.list1)
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  constructor() { }
  onItemDrop(e: any) {
    console.log(e)
    // Get the dropped data here
    this.listTeamOne.push(e.dragData);
  }
  ngOnInit(): void {
    this.tasks = [
      {
        "id": 1,
        "title": "Create peoples module",
        "people": 1,
        "skills": [
          1,
          2,
          3
        ],
        "startDate": "2017-04-01T22:15:01+02:00",
        "endDate": "2017-04-07T22:15:01+02:00",
        "start": "2017-04-01T22:15:01+02:00",
        "end": "2017-04-07T22:15:01+02:00",
        "backgroundColor": "#fcf8e3"
      },
      {
        "id": 2,
        "title": "Create add new task module",
        "people": 1,
        "skills": [
          1,
          2,
          3
        ],
        "startDate": "2017-04-06T22:15:01+02:00",
        "endDate": "2017-04-13T22:15:01+02:00",
        "start": "2017-04-06T22:15:01+02:00",
        "end": "2017-04-13T22:15:01+02:00",
        "backgroundColor": "#fcf8e3"
      },
      {
        "id": 3,
        "title": "Create Task list",
        "people": 2,
        "skills": [
          1,
          2,
          3
        ],
        "startDate": "2017-04-03T22:15:01+02:00",
        "endDate": "2017-04-10T22:15:01+02:00",
        "start": "2017-04-03T22:15:01+02:00",
        "end": "2017-04-10T22:15:01+02:00",
        "backgroundColor": "#fcf8e3"
      },
      {
        "id": 4,
        "title": "Create task inprogress board",
        "people": 3,
        "skills": [
          2,
          5,
          6
        ],
        "startDate": "2017-04-10T22:15:01+02:00",
        "endDate": "2017-04-18T22:15:01+02:00",
        "start": "2017-04-10T22:15:01+02:00",
        "end": "2017-04-18T22:15:01+02:00",
        "backgroundColor": "#fcf8e3"
      },
      {
        "id": 5,
        "title": "Create task complete board",
        "people": 4,
        "skills": [
          3,
          4,
          7
        ],
        "startDate": "2017-04-18T22:15:01+02:00",
        "endDate": "2017-04-25T22:15:01+02:00",
        "start": "2017-04-18T22:15:01+02:00",
        "end": "2017-04-25T22:15:01+02:00",
        "backgroundColor": "#fcf8e3"
      },
      {
        "id": 6,
        "title": "Create task chart overview on board",
        "people": 5,
        "skills": [
          1,
          2,
          3,
          6
        ],
        "startDate": "2017-04-22T22:15:01+02:00",
        "endDate": "2017-04-30T22:15:01+02:00",
        "start": "2017-04-22T22:15:01+02:00",
        "end": "2017-04-30T22:15:01+02:00",
        "backgroundColor": "#fcf8e3"
      },
      {
        "id": 7,
        "title": "Create service for task",
        "people": 6,
        "skills": [
          1,
          2,
          3,
          7,
          8
        ],
        "startDate": "2017-04-25T22:15:01+02:00",
        "endDate": "2017-04-30T22:15:01+02:00",
        "start": "2017-04-25T22:15:01+02:00",
        "end": "2017-04-30T22:15:01+02:00",
        "backgroundColor": "#fcf8e3"
      },
      {
        "id": 8,
        "title": "Testing software",
        "people": 7,
        "skills": [
          8,
          9,
          10
        ],
        "startDate": "2017-04-09T22:15:01+02:00",
        "endDate": "2017-05-20T22:15:01+02:00",
        "start": "2017-04-09T22:15:01+02:00",
        "end": "2017-05-01T20:15:01+02:00",
        "backgroundColor": "#fcf8e3"
      }
    ]
  }

}

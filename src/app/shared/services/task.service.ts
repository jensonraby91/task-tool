import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  private taskUrl = 'api/getTasks';
  private inProgressTaskUrl = 'api/inProgressTask';
  private completedTaskUrl = 'api/completedTask';

  private newTask: Subject<any> = new Subject<any>();
  public newTask$ = this.newTask.asObservable();

  getTask(): Observable<any> {
    return this.http.get(this.taskUrl).pipe(catchError(error => throwError(error)))
  }
  getInProgress(): Observable<any> {
    return this.http.get(this.inProgressTaskUrl).pipe(catchError(error => throwError(error)))
  }
  getComplted(): Observable<any> {
    return this.http.get(this.completedTaskUrl).pipe(catchError(error => throwError(error)))
  }

  updateNewTask(val) {
    this.newTask.next(val);
  }

  dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }


}

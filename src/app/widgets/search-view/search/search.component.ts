import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public form: FormGroup;
  @Output() searchEvent = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  createSerchForm() {
    this.form = this.fb.group({
      search: ['']
    })
  }

  onChanges() {
    this.form.get('search').valueChanges.pipe(debounceTime(2000)).subscribe(val => {
      this.searchEvent.next(val);
    });
  }

  ngOnInit() {
    this.createSerchForm();
    this.onChanges();
  }

}

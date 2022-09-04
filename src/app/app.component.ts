import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs';
import { IStudent } from './models/model-student';
import { GetStudents } from './store/actions/get-students.actions';
import { ShowData } from './store/actions/show-data.actions';
import { getStudentsSelector } from './store/selectors/get-students.selectors';
import { showDataSelector } from './store/selectors/show-data.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  constructor(
    private store: Store
  ) { }

}

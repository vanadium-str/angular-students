import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
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

  students$ = this.store.select(getStudentsSelector);
  showData$ = this.store.select(showDataSelector);
  students: IStudent[];

  showData(){
    this.store.dispatch(new ShowData);
  }

  getData(){
    this.store.dispatch(new GetStudents);
    this.students$.subscribe(data => {
      this.students = data;  
    });
  }

  constructor(
    private store: Store
  ) { }

}

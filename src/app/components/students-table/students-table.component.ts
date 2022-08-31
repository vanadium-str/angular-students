import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IStudent } from 'src/app/models/model-student';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { ICourse } from 'src/app/models/model-course';
import { getStudentsSelector } from 'src/app/store/selectors/get-students.selectors';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class StudentsTableComponent implements OnInit {

  students$ = this.store.select(getStudentsSelector);
  students: IStudent[];

  constructor(
    private store: Store,
    private cd: ChangeDetectorRef
  ) { }
  
  ngOnInit(): void {    
    this.students$.subscribe(data => {
      this.students = data;
      console.log(this.students);

      this.students.forEach(student => {
        if (student.courses && Array.isArray(student.courses) && student.courses.length) {
          this.studentsData = [...this.studentsData, {...student, courses: new MatTableDataSource(student.courses)}];
        } else {
          this.studentsData = [...this.studentsData, student];
        }
      });
      
      this.dataSource = new MatTableDataSource(this.studentsData);
      this.dataSource.sort = this.sort;
    });
  }

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<ICourse>>;

  dataSource: MatTableDataSource<IStudent>;
  studentsData: IStudent[] = [];
  columnsToDisplay = ['surname', 'name', 'email', 'phone'];
  innerDisplayedColumns = ['title', 'teacher', 'amountHours'];
  expandedElement: IStudent | null;

  toggleRow(element: IStudent) {
    element.courses && (element.courses as MatTableDataSource<ICourse>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<ICourse>).sort = this.innerSort.toArray()[index]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<ICourse>).filter = filterValue.trim().toLowerCase());
  }
}

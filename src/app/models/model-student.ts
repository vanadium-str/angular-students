import { ICourse } from "./model-course";
import { MatTableDataSource, MatTable } from '@angular/material/table';

export interface IStudent{ 
    id: number,
    name: string,
    surname: string,
    email: string,
    phone: string,
    courses: ICourse[] | MatTableDataSource<ICourse>
}

export interface IStudentState {
    students: IStudent[]
}
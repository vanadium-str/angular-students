import { Action } from "@ngrx/store";
import { IStudent } from "src/app/models/model-student";

export const setStudents = '[STUDENTS] Set students data';
export const getStudents = '[STUDENTS] Get students data';

export const STUDENTS_KEY = 'students';

export class GetStudents implements Action {
    readonly type = getStudents;
}

export class SetStudents implements Action {
    readonly type = setStudents;

    constructor( public payload: IStudent[] ){}
}

export type GetStudentsActions = GetStudents | SetStudents;
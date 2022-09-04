import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { delay, map, of, switchMap } from "rxjs";
import { IStudent } from "src/app/models/model-student";
import { StudentService } from "../../services/students.service";
import { getStudents, GetStudents, SetStudents } from "../actions/get-students.actions";

@Injectable()
export class GetStudentsEffects {
    constructor(
        private actions$: Actions,
        private studentsService: StudentService
    ) {}

    getStudents$ = createEffect(() => {
        return this.actions$.pipe(
            delay(500),
            ofType<GetStudents>(getStudents),
            switchMap((action: GetStudents) => 
                this.studentsService.getData()
                    .pipe(map((res: IStudent[]) => new SetStudents(res)))
            ))
        })

}
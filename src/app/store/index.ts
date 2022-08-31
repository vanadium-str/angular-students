import { ActionReducerMap } from "@ngrx/store";
import { IStudentState } from "../models/model-student";
import { STUDENTS_KEY } from "./actions/get-students.actions";
import { VISIBILITY_KEY } from "./actions/show-data.actions";
import { getStudentsReducer } from "./reducers/get-students.reducers";
import { IVisibility, visibilityReducer } from "./reducers/show-data.reducers";

export interface State {
    [STUDENTS_KEY]: IStudentState,
    [VISIBILITY_KEY]: IVisibility
}

export const appReducers: ActionReducerMap<State, any> = {
    [STUDENTS_KEY]: getStudentsReducer,
    [VISIBILITY_KEY]: visibilityReducer
}
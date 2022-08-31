import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IStudentState } from "src/app/models/model-student";
import { STUDENTS_KEY } from "../actions/get-students.actions";

export const featureSelector = createFeatureSelector<IStudentState>(STUDENTS_KEY);

export const getStudentsSelector = createSelector(
    featureSelector,
    state => state.students
)
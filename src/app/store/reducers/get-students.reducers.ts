import { IStudent, IStudentState } from "src/app/models/model-student";
import { GetStudentsActions, setStudents } from "../actions/get-students.actions";

export type Action = GetStudentsActions;

const initialState: IStudentState = { 
    students: []
}

export const getStudentsReducer = (state = initialState, action: Action): IStudentState => {
    switch(action.type){
        case setStudents: {
            return {
                ...state,
                students: action.payload
            }
        }
        default:
            return state;
    }
}
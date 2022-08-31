import { showData, ShowDataActions } from "../actions/show-data.actions";

export interface IVisibility {
    showData: boolean
}

const initialState: IVisibility = {
    showData: false
}

export type Action = ShowDataActions;

export const visibilityReducer = (state = initialState, action: Action): IVisibility => {
    switch(action.type){
        case showData: {
            return {
                ...state,
                showData: !state.showData
            }
        }
        default:
            return state;
    }
}
import { Action } from "@ngrx/store";

export const showData = '[VISIBILITY] Show data';

export const VISIBILITY_KEY = 'visibility';

export class ShowData implements Action {
    readonly type = showData;
}

export type ShowDataActions = ShowData;
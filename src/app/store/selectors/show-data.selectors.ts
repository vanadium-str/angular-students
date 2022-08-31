import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VISIBILITY_KEY } from "../actions/show-data.actions";
import { IVisibility } from "../reducers/show-data.reducers";

export const featureSelector = createFeatureSelector<IVisibility>(VISIBILITY_KEY);

export const showDataSelector = createSelector(
    featureSelector,
    state => state.showData
)
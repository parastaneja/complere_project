import { createSelector } from 'reselect';
import GlobalState from '../selector';

export const globalAccountState = state => state.employ || {};

export const employState = () =>
    createSelector(GlobalState, substate => substate.employ);



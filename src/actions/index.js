import { CLICK_UPDATE_VALUE, FULL_VIEW_SELECT } from './actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
  });

export const fullViewSelect = value => ({
    type: FULL_VIEW_SELECT,
    fullView: value
  });
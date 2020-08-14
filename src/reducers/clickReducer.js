import { CLICK_UPDATE_VALUE, FULL_VIEW_SELECT } from '../actions/actionTypes';

const initialState = {
  newValue: '',
  fullView: ''
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    case FULL_VIEW_SELECT:
      return {
        ...state,
        fullView: action.fullView
      };
    default:
      return state;
  }
}
